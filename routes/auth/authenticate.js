const express = require(`express`);
const router = express.Router();
router.use(`/login`, require(`./login`));
router.use(`/signup`, require(`./signup`));
router.use(`/delete`, require(`./delete`));
router.post(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.get(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.put(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.delete(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.patch(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.head(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.options(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.trace(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
router.connect(`/:anything`, (req, res) => {
  res.status(404).send("Not Found");
});
module.exports = router;
