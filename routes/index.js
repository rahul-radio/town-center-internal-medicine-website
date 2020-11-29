var express     = require("express");
var router      = express.Router();


// =============================
// LANDING PAGE ROUTE
// =============================

router.get("/", function(req, res) {
    res.render("landing");
});

router.get("/contact", function(req, res) {
    res.render("contact");
});

router.get("/about", function(req, res){
    res.render("about");
});

router.get("/podiatry", function(req, res){
    res.render("podiatry");
});

router.get("/internalMedicine", function(req, res){
    res.render("internalMedicine");
});

router.get("/*", function(req, res){
    res.redirect("/");
});
module.exports = router;
