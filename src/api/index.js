const express = require('express');
const Shop = require("./Shop");
const router = express.Router();
router.use("/shop", Shop);
module.exports = router;
