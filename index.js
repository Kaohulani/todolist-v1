//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Set the UHMC image URL in the header view
app.use(function(req, res, next) {
    res.locals.uhmcHeaderImageUrl = "http://maui.hawaii.edu/mli/wp-content/uploads/2014/04/UHMC-Header.jpg";
    next();
});

// Set the UHMC logo URL in the footer view
app.use(function(req, res, next) {
    res.locals.uhmcFooterImageUrl = "https://maui.hawaii.edu/wp-content/uploads/2021/02/official-seal.jpg";
    next();
});

// Sample array of final exam items
let finalExamItems = ["ICS 171", "BUS 320", "ICS 111"];

app.set('view engine', 'ejs');
app.use(express.static("public"));

// Route to display final exam items
app.get("/finals", function(req, res) {
    res.render("list", {listTitle: "Final Exam Items", newListItems: finalExamItems});
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
