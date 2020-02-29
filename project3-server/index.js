require("dotenv").config();
const logger = require('express-simple-logger')

const express = require("express");
const bodyParser = require("body-parser");
const administrator = require("./routes/administrator");
const routing = require("./routes/routing");
const vacationDB = require("./routes/vacationDB");
const cors = require("cors");
const app = express();

const path = require('path')




const root = path.resolve(
  __dirname,
  '..',
  "project3-client",
  'build'
)


app.use(cors());
app.use(logger())

app.use(bodyParser.json());


app.use("/", routing);
app.use("/", vacationDB);
app.use("/admin", administrator);

app.use(express.static(root));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root })
})

app.listen(3200, () => {
  console.log("listening  to: " + process.env.PORT);
});
