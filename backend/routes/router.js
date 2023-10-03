const router = require('express').Router();

const serviceRouter = require("./service");

router.use("/", serviceRouter);

module.exports = router;