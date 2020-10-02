// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-done").on("click", function(event) {
    var id = $(this).data("id");
    var newDone = $(this).data("newdone");

    var newDoneState = {
      done: newDone
    };

    // Send the PUT request.
    $.ajax("/api/tasks/" + id, {
      type: "PUT",
      data: newDoneState
    }).then(
      function() {
        console.log("changed state to", newDone);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTask = {
      task: $("#textarea").val().trim(),
      done: false
    };

    // Send the POST request.
    $.ajax("/api/tasks", {
      type: "POST",
      data: newTask
    }).then(
      function() {
        console.log("created new task");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});
