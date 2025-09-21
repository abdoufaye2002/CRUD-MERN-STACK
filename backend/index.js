const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routeUser = require("./routes/user.routes")
const connectToDatabase = require("./database")
app.use(cors());
app.use(express.json());

const port = 3001;

connectToDatabase()


app.use("/",routeUser)


app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
