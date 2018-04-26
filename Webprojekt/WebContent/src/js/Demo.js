$(function(){
    var tasklist = new TaskList("dinner");

    tasklist.addTask(new Task("invite asd", 0));
    tasklist.addTask(new Task("buy vegetables", 1));
    tasklist.addTask(new Task("prepare food", 2));
    tasklist.addTask(new Task("do something", 3));

    $(".form-inner").append(tasklist.render());

    $( ".span-4" ).keypress(function(event) {
        console.log(event.target);
      });


    $("#taskList").on("keydown change", "input",function(event) {
 
        var type = $($(this)[0]).attr("type");
        var current_task = $(this).parent().data("task");
     alert(current_task);
        if(type ==="text"){
          current_task.title =  $(this).val();
          $(this).parent().data("task",current_task);
        }else{
          current_task.done = $(this).is(":checked");
          $(this).parent().data("task",current_task);
        }
     
        console.log("Dieser Task", $(this).parent().data("task"))
      });
});