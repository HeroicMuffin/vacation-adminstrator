require("dotenv").config();
const logger = require('express-simple-logger')

const express = require("express");
const bodyParser = require("body-parser");
const administrator = require("./routes/administrator");
const routing = require("./routes/routing");
const vacationDB = require("./routes/vacationDB");
const cors = require("cors");
const path = require("path");

const app = express();

const port = process.env.PORT
app.use(logger())

app.use(cors());
app.use(logger());

app.use(bodyParser.json());

const root = path.resolve(
    __dirname,
    'build'
);



app.use("/", routing);
app.use("/", vacationDB);
app.use("/admin", administrator);

app.use(express.static(root));


app.get('/*', (req, res) => {
  res.sendFile('index.html', { root })
});
app.listen(port, () => {
  console.log("listening  to: " + port);
});
