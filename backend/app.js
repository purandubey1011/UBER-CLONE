let env = require("dotenv");
env.config();
let express = require("express");
let cors = require("cors");
let app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/user.routes.js"));

module.exports = app;
