let TaskList = function(title){
    this.title = title;
    this.tasks = [];
}

TaskList.prototype.addTask = function(task) {
   this.tasks.push(task);
}
TaskList.prototype.checkTask = function(index){
    this.tasks[index].check(); 
}    
TaskList.prototype.uncheckTask = function(index){
    this.tasks[index].uncheck(); 
}    
TaskList.prototype.removeTask = function(index){
    this.tasks.splice(index, 1);
}

//lambda function in js: this.addTask = task => taks.push(task);
//let ist scope based, see difference const, let, var


//For demonstration purpose 
let theTasks = new TaskList("the tasks");
const button = document.getElementById("addTask");

button.addEventListener('click', function(){
    theTasks.addTask(new Task(false, 'kill garbage'));
    console.log(theTasks);
});