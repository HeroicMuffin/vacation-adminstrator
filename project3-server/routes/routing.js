const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const pool = require("../database/pool");
const joi = require("../Validation/validateUser");

router.get("/verify", async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    jwt.verify(authorization, process.env.SECRET, (err, decoded) => {
      if (err) return res.json({ status: false });
      return res.json({ status: true });
    });
  } catch (ex) {
    return res.json({ status: false });
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await doesUserExist(email, password);
    const isAdmin = await doesAdminExist(email, password);
    if (!user) return res.json({ message: "Invalid username or password" });
    const jwtToken = await getJwt({ ...user, password: password });
    return res.json({
      redirect: true,
      token: jwtToken,
      isAdmin: !!isAdmin
    });
  } catch (ex) {
    console.log(ex);
    if (!user) return res.status(401).send("Login error");
  }
});

router.post("/register", joi.registerValidation, async (req, res, next) => {
  try {
    const { email } = req.body;
    const user = await doesUserExist(email);
    if (user) return res.json({ message: "user already exists" });
    const insertId = await saveUser(req.body);
    if (insertId) return res.json({ message: "user saved!", redirect: true });
    return res.json({ message: "Error occurred", redirect: false });
  } catch (ex) {
    console.log(ex);
    if (!user) return res.status(401).send("Registeration Error");
  }
});

module.exports = router;

function getJwt(userObj) {
  return new Promise((resolve, reject) => {
    jwt.sign(userObj, process.env.SECRET, { expiresIn: "1h" }, (err, token) => {
      if (err) reject("error");
      resolve(token);
    });
  });
}

async function doesUserExist(email, password = null) {
  const payload = password ? [email, password] : [email];
  const query = password ? getUserPasswordExistQuery() : getUserExistQuery();
  const [result] = await pool.execute(query, payload);
  const [firstUser] = result;
  return firstUser;
}

async function doesAdminExist(email, password) {
  const payload = [email, password];
  if (email === undefined || password === undefined) return false;
  const query = getAdminPasswordExistQuery();
  const [result] = await pool.execute(query, payload);
  const [firstUser] = result;
  return firstUser;
}

async function saveUser(payload) {
  const { email, password, firstName, lastName } = payload;
  // const [result] = await pool.execute(getUserInsertionQuery(), [email, bcrypt.hashSync(password, salt), firstName, lastName])
  const [result] = await pool.execute(getUserInsertionQuery(), [
    email,
    password,
    firstName,
    lastName
  ]);
  console.log("user saved:", result);
  return result.insertId;
}

function getAdminPasswordExistQuery() {
  return "SELECT * FROM `vacations_schema`.`administrators` where email = ? and password = ?";
}

function getUserExistQuery() {
  return "SELECT * FROM `vacations_schema`.`users` where email = ?";
}

function getUserPasswordExistQuery() {
  return "SELECT * FROM `vacations_schema`.`users` where email = ? and password = ?";
}

function getUserInsertionQuery() {
  return "INSERT INTO `vacations_schema`.`users` (`email`, `password`, `first_name`, `last_name`) VALUES (?,?,?,?)";
}
