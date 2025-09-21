const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const cors = require("cors");
const app = express();
const routeUser = require("./routes/user.routes")
const connectToDatabase = require("./database")
app.use(morgan("dev"))
app.use(express.json());


app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

const port = 3001;

connectToDatabase()


app.use("/",routeUser)


app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
