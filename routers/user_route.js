const Router = require("express").Router;
const UserController = require("../controllers/user-controllers");
const router = new Router();

router.post("/registratin", UserController.registration);
router.post("/login");
router.post("/logout");
router.post("/refresh");

module.exports = router;
