$(function () {
    var tasklist = new TaskList("dinner");

    tasklist.addTask(new Task("invite asd", 0));
    tasklist.addTask(new Task("buy vegetables", 1));
    tasklist.addTask(new Task("prepare food", 2));
    tasklist.addTask(new Task("do something", 3));

    $(".form-inner").append(tasklist.render());

    $(".span-4").keypress(function (event) {
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
    });

    $("#listForm").on("submit", function (eventelino) {
        //To avoid page refresh
        eventelino.preventDefault();

        const input = $("#listTitle");
        const listTitle = input.val();

        //To empty form when submit
        input.val("");

        const task = TaskList(listTitle);
        newTasklist(listTitle);

    });

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