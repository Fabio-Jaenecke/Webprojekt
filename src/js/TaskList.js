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
    var $markup = $('<ul>');
    var _i;
    for (_i = 0; _i < this.tasks.length; _i += 1) {
      $markup.append(this.tasks[_i].render());
    }
    return $markup;
}
TaskList.prototype.toJson = function(){
    return JSON.stringify({title: this.title, tasks: this.tasks});
}