var express = require("express");

var router = express.Router();

// Import the model (task.js) to use its database functions.
var task = require("../models/task.js");

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

router.post("/api/tasks", function(req, res) {
  task.insertOne([
    "task_name", "done"
  ], [
    req.body.task, false
  ], function(result) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

router.put("/api/tasks/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  task.updateOne({
    done: true
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
