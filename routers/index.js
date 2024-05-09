const Router = require("express").Router;
const router = new Router();
const user_router = require("./user_route");
const post_router = require("./post_router");

router.use("/users", user_router);
router.use("/content", post_router);

module.exports = router;