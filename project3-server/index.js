require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const administrator = require("./routes/administrator");
const routing = require("./routes/routing");
const vacationDB = require("./routes/vacationDB");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/", routing);
app.use("/", vacationDB);
app.use("/admin", administrator);

app.listen(3200, () => {
  console.log("listening  to: " + process.env.PORT);
});
