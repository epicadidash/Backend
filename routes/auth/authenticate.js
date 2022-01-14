const express = require(`express`);
const router = express.Router();
router.use(`/login`, require(`./login`));
router.use(`/signup`, require(`./signup`));
router.use(`/delete`, require(`./delete`))
module.exports = router;
