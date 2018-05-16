
$(function(){
    var tasklist = new TaskList("dinner");

    tasklist.addTask(new Task("invite asd", 0));
    tasklist.addTask(new Task("buy vegetables", 1));
    tasklist.addTask(new Task("prepare food", 2));
    tasklist.addTask(new Task("do something", 3));

    $(".form-inner").append(tasklist.render());
    
    $("#listForm").on("submit", function(eventino){
        eventino.preventDefault();
        newTasklist($("#listTitle").val());
        $("#listTitle").val("");
    })

    async function newTasklist(title) {
        const res = await (await fetch("http://zhaw.herokuapp.com/task_lists/", {
            method: "post",
            body: JSON.stringify({ title })
        })).json();
    console.log(res);
        const tasklist2 = new TaskList(title, res.id);
        let tasklists;
        if (localStorage.getItem("tasklists")) {
            tasklists = JSON.parse(localStorage.getItem("tasklists"));
            tasklists.push(res.id);
        } else {
            tasklists = [res.id];
        }
        localStorage.setItem("tasklists", JSON.stringify(tasklists));
    }

});