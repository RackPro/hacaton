const Router = require("express").Router;
const router = new Router();
const postController = require("../controllers/post-controllers");

router.get("/posts", postController.posts);
router.post("/createpost");
router.delete("/deletepost");
router.put("/editpost");

module.exports = router;
