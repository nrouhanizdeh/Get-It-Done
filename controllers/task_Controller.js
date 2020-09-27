var express = require("express");

var router = express.Router();

// Import the model (task.js) to use its database functions.
var cat = require("../models/task.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  task.all(function(data) {
    var hbsObject = {
      tasks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// Export routes for server.js to use.
module.exports = router;
