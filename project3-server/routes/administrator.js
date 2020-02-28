const express = require("express");
const router = express.Router();
const pool = require("../database/pool");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const verify = async (req, res, next) => {
    const {authorization} = req.headers;
    jwt.verify(authorization, process.env.SECRET, async (err, decoded) => {
        if (err) return res.json({status: false});
        const {email, password} = decoded;
        try {
            let isAdmin = await doesAdminExist(email, password);
            if (!isAdmin) {
                res.json("unauthorized. this user is not admin");
            } else {
                next();
            }
        } catch (e) {
            res.json("unauthorized. this user is not admin");
        }
    });
};

router.get("/verify", verify, (req, res, next) => {
    console.log("admin inside");
    res.json({status: true});
});

router.post("/update", verify, async (req, res, next) => {
    const {description, departure, returning, price, id} = req.body;
    const query = getEditVacationQuery();

    const result = await pool.query(query, [
        description,
        moment(departure).format("YYYY-MM-DD HH:mm:ss"),
        moment(returning).format("YYYY-MM-DD HH:mm:ss"),
        price,
        id
    ]);
    res.json(`database updated: ${result}`);
});

router.post("/addtrip", verify, async (req, res, next) => {
    const {
        returning,
        departure,
        price,
        description,
        destination,
        image1,
        image2,
        image3
    } = req.body;
    try {
        const query = getAddVacationQuery();
        const imageQ = getAddImageQuery();
        await pool.query(imageQ, [destination, image1]);
        await pool.query(imageQ, [destination, image2]);
        await pool.query(imageQ, [destination, image3]);
        const result = await pool.query(query, [
            description,
            departure,
            returning,
            price,
            destination
        ]);
        res.json(`database updated: ${result}`);
    } catch (err) {
        console.log(err);
    }
});

router.post("/delete", verify, async (req, res, next) => {
    const {destination, id} = req.body;
    const query = getVacationsToRemoveQuery();
    const result = await pool.query(query, [id, destination]);
    res.json(`delete record [${destination} ,${{id}}]`);
});

async function doesAdminExist(email, password) {
    const payload = [email, password];
    if (email === undefined || password === undefined) return false;
    const query = getAdminPasswordExistQuery();
    const [result] = await pool.execute(query, payload);
    const [firstUser] = result;
    return firstUser;
}

function getAddImageQuery() {
    return "INSERT INTO `vacations_schema`.`images` (`destination`, `image`) VALUES (?,?);";
}

function getAddVacationQuery() {
    return "INSERT INTO `vacations_schema`.`vacations` (`description`, `departure`, `returning`, `price`, `destination`) VALUES (?, ?, ?, ?, ?);";
}

function getAdminPasswordExistQuery() {
    return "SELECT * FROM `vacations_schema`.`administrators` where email = ? and password = ?";
}

function getEditVacationQuery() {
    return `UPDATE vacations_schema.vacations SET description = ?, 
  departure = ?, returning = ?, price = ? WHERE id =?`;
}

function getVacationsToRemoveQuery() {
    return `delete from vacations where id = ? and destination = ?`;
}

module.exports = router;
