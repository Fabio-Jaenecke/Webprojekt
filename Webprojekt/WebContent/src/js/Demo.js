$(function(){
    let tasklist = new TaskList("dinner");

    tasklist.addTask(new Task("invite guests"));
    tasklist.addTask(new Task("buy vegetables"));
    tasklist.addTask(new Task("prepare food"));
    tasklist.addTask(new Task("do something"));

    $(".form-inner").append(tasklist.render());
});


