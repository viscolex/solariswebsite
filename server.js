var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

app.use(express.static('public'));

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});

router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/index.html", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/team.html", function (req, res) {
    res.sendFile(path + "team.html");
});

router.get("/roadmap.html", function (req, res) {
    res.sendFile(path + "roadmap.html")
});

router.get("/coin-params.html", function (req, res) {
    res.sendFile(path + "coin-params.html")
});

router.get("/faq.html", function (req, res) {
    res.sendFile(path + "faq.html")
})

router.get("/resources.html", function (req, res) {
    res.sendFile(path + "resources.html")
})

router.get("/calculator.html", function (req, res) {
    res.sendFile(path + "calculator.html")
})

router.get("/test.html", function (req, res) {
    res.sendFile(path + "test.html")
})


app.use("/", router);

app.listen(3000, function () {
    console.log("Live at Port 3000");
});