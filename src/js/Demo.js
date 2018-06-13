var tasklist;

$(function() {
  tasklist = new TaskList("dinner");

  tasklist.addTask(new Task("invite asd"));
  tasklist.addTask(new Task("buy vegetables"));
  tasklist.addTask(new Task("prepare food"));
  tasklist.addTask(new Task("do something"));

  tasklist.save();

  $(".form-inner").append(tasklist.render());

  $("#addTask").on("click", function(event) {
    event.preventDefault();
    var task = new Task("");
    $(".form-inner").append(task.render());
  });

  $("#saveTask").on("click", function(event) {
    console.log("save event received");
    tasklist.saveWithPromise().then(results => {console.log("the resolved part", resolve)});
  });
});