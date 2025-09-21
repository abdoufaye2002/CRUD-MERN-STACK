const express = require("express")
const router = express.Router()
const ModelUsers = require("../models/utilisateurs")
const userController = require("../controllers/user.controllers")


router.get("/",userController.getAll);

router.get("/getUser/:id", userController.getOne);
router.put("/updateUser/:id",userController.updateOne);


router.post("/creerUser",userController.createUser);

router.delete("/deleteUser/:id", userController.deleteUser);

module.exports = router