$(function(){
    var tasklist = new TaskList("dinner");

    tasklist.addTask(new Task("invite asd", 0));
    tasklist.addTask(new Task("buy vegetables", 1));
    tasklist.addTask(new Task("prepare food", 2));
    tasklist.addTask(new Task("do something", 3));

    $(".form-inner").append(tasklist.render());

    // TODO either take this event handler or the one in taks.js
    /*
    $( ".span-4" ).keypress(function(event) {
        var taskId = tasklist.tasks[$(this).attr("taskid")];
        //Id 
        console.log($(this).attr("taskid"));

        //Remove Task, Create new one with Current Title 
        tasklist.removeTask(taskId);
        tasklist.addTask(new Task(event.target.value, taskId));

        //Future Idea, to set new Title via 'setTitle' method
        console.log(tasklist.tasks[$(this).attr("taskid")])

        //Current Value
        console.log(event.target.value)
    });*/
});