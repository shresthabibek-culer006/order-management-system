const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const upload = require("../middleware/upload.middleware");

router.post("/register", upload.single("profileImage"), userController.register);
router.post("/login", userController.login);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.put("/:id", upload.single("profileImage"), userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;