const express = require("express");
const router = express.Router();
const moment = require("moment");
const pool = require("../database/pool");
const jwt = require("jsonwebtoken");

async function initSql() {
    await pool.execute("truncate vacations;", []).then(() => {
        pool
            .execute("INSERT INTO vacations SELECT * FROM vacations_bu", [])
            .then(r => {
                console.log("DB:finish init");
            });
    });
}


initSql().then(r => {
    "DB : finish init. "
})

function getVacationCountData() {
    return `select vacation_id ,count(*) as cnt from vacations_schema.id_vacations_follow
          group by vacation_id
          order by 2 desc`;
}

router.get("/GetData", async (req, res, next) => {
    async function getAllVacationsResult() {
        const [allVacations] = getVacationsQuery();
        const allVacationsResult = await pool.query(allVacations);
        const [getVacationFollowersCount] = await pool.query(
            getVacationCountData()
        );
        const [table] = allVacationsResult;
        const map = getVacationFollowersCount.reduce((acc, current) => {
            acc[current.vacation_id] = current.cnt;
            return acc;
        }, {});

        table.forEach(trip => {
            trip.departure = moment(trip.departure).format("MM-DD-YYYY");
            trip.returning = moment(trip.returning).format("MM-DD-YYYY");
            trip["followers"] = map[trip.id];
        });

        return table;
    }

    const allVacationsResult = await getAllVacationsResult();

    const {authorization} = req.headers;

    jwt.verify(authorization, process.env.SECRET, async (err, decoded) => {
        if (err) return res.json({status: false});
        const {email, password} = decoded;
        const query = getMyVacationsFollows();
        const result = await pool.query(query, email);
        const [table] = result;
        res.json({
            table: allVacationsResult,
            myFollows: table.map(record => record.vacation_id)
        });
    });
});

router.get("/follow", (req, res, next) => {
    const {authorization} = req.headers;
    jwt.verify(authorization, process.env.SECRET, async (err, decoded) => {
        if (err) return res.json({status: false});
        const {email} = decoded;
        const query =
            req.query.intent === "true"
                ? followVacationQuery()
                : unFollowVacationQuery();
        await pool.query(query, [email, req.query.id]);
    });
    res.end();
});

function unFollowVacationQuery() {
    return `delete from id_vacations_follow where user_id = ? and vacation_id = ?;`;
}

function followVacationQuery() {
    return `INSERT INTO id_vacations_follow(user_id,vacation_id) VALUES(?,?);`;
}

function getVacationsQuery() {
    return [
        `select vacations.id,description,departure,returning,price,vacations.destination,GROUP_CONCAT(image) as images from vacations inner join images where vacations.destination = images.destination
group by vacations.id`
    ];
}

function getMyVacationsFollows() {
    return `SELECT * FROM vacations_schema.id_vacations_follow WHERE user_id = ? ;`;
}

module.exports = router;
