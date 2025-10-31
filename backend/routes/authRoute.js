const express = require("express");
const router = express.Router();
const authController = require("../controllers/authControler");

router.get('/users', authController.getUsers);
router.get("/users/:id", authController.getUsersById);
router.get('/dashboard', authController.verifyToken, authController.Dashboard);
router.post('/signup', authController.Signup);
router.post('/login', authController.Login);
router.post('/logout', authController.Logout);
router.put("/updateuser/:id", authController.Edit);

module.exports = router;