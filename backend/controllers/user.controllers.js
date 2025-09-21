const ModelUsers = require("../models/utilisateurs")

const getAll= (req, res) => {
  ModelUsers.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

const getOne = (req, res) => {
  const id = req.params.id;
  ModelUsers.findById({ _id: id })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
}

const updateOne =  (req, res) => {
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
}

const createUser =  (req, res) => {
  ModelUsers.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
    });
}

const deleteUser = (req, res) => {
  const id = req.params.id;
  ModelUsers.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
module.exports= {getAll,getOne,updateOne,createUser,deleteUser}