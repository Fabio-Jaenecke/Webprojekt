let TaskList = function(title){
    this.title = title;
    this.tasks = [];
}

TaskList.prototype.setTitle = function(title, index){
    this.task[index].title = title;
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
TaskList.prototype.render = function(){
    var $markup = "<ul>";
    this.tasks.forEach(function(task){
        $markup += task.render();
    });
    return $markup;
}