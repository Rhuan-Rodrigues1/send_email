const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

require("./controller/sendEmailController")(app);

module.exports = { app };
