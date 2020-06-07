const express = require("express");
const router = express.Router();
const controller = require("../controllers/updateTax.controller");

router.get("/api/updateTax", controller.updateTax);

module.exports = router;
