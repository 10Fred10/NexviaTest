const express = require("express");
const router = express.Router();
const controller = require("../controllers/app.controller");

router.get("/api/calcInterest", controller.calcInterest);
router.get("/", function(req, res){
    res.sendFile('calcInterestForm.html',{ root: "Views" });
  }); 

module.exports = router;
