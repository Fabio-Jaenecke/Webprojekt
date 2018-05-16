<<<<<<< HEAD:src/js/TaskList.js
let TaskList = function(title, id){
    this.title = title;
    this.tasks = [];
    this.id = id || "";
=======
let TaskList = function(title){
    this.title = title;
    this.tasks = [];
>>>>>>> 851bab06eb6d5f1bb3425e76c7cece36007cafd8:src/js/TaskList.js
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