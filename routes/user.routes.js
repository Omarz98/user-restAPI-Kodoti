const express = require('express');

const userController = require("../controller/user.controller");

const router = express.Router();

router.get("/", userController.getAllUser);
router.get("/:id", userController.GetUserById);
router.post("/", userController.CreateUser);
router.put("/:id", userController.UpdateUserById);
router.delete("/:id", userController.DeleteUserById);

module.exports = router;