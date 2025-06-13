const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ModelUsers = require("./models/utilisateurs");
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/crud");

app.get("/", (req, res) => {
  ModelUsers.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  ModelUsers.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.put("/updateUser/:id", (req, res) => {
  const id = req.params.id;
  ModelUsers.findByIdAndUpdate(
    { _id: id },
    { nom: req.body.nom, mail: req.body.mail, age: req.body.age }
  )
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.post("/creerUser", (req, res) => {
  ModelUsers.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
});
app.delete("/deleteUser/:id", (req, res) => {
  const id = req.params.id;
  ModelUsers.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
});
const port = 3001;
app.listen(port, (req, res) => {
  console.log(`http://localhost:${port}`);
});
//ssss
