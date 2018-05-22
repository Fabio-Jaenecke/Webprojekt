
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
        //erzeugt einen neuen task und speichert auf dem server
        const res = await (await fetch("https://zhaw.herokuapp.com/task_lists/", {
            method: "post",
            body: JSON.stringify({ title })
        })).json();

        //checkt ob es im local storage ist, sonnst erstellt es ein neues
        let tasklists;
        if (localStorage.getItem("tasklists")) {
            tasklists = JSON.parse(localStorage.getItem("tasklists"));
            tasklists.push(res.id);
        } else {
            tasklists = [res.id];
        }
        localStorage.setItem("tasklists", JSON.stringify(tasklists));

        //holt sich tasks vom server
        const promises = tasklists.map(async id => await (await fetch(`https://zhaw.herokuapp.com/task_lists/${id}`)).json());
        const taskListsFromServer = await Promise.all([... promises]);        
        $("#taskLists").empty();
        taskListsFromServer.forEach(a => {
            $("#taskLists").append("<li>" + a.title + "</li>");
        })
    }
});