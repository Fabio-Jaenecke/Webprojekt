var tasklist;

$(function() {
  tasklist = new TaskList("dinner");

  console.log("yeah");
  tasklist.addTask(new Task("invite asd"));
  tasklist.addTask(new Task("buy vegetables"));
  tasklist.addTask(new Task("prepare food"));
  tasklist.addTask(new Task("do something"));

  $(".form-inner").append(tasklist.render());

  $("#addTask").click(function(event) {
    event.preventDefault();
    var task = new Task("");
    $(".form-inner").append(task.render());
  });

  $("#saveTask").click(function(event) {
    console.log("save event received");
    tasklist.save();
  });

  console.log("second yeah");
});
