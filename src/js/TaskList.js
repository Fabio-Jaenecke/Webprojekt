var hashcounter = 11;
let TaskList = function(title) {
  this.title = title;
  this.tasks = [];
  this.id = null;
};

TaskList.prototype.setTitle = function(title, index) {
  this.task[index].title = title;
};

TaskList.prototype.addTask = function(task) {
  this.tasks.push(task);
};
TaskList.prototype.checkTask = function(index) {
  this.tasks[index].check();
};
TaskList.prototype.uncheckTask = function(index) {
  this.tasks[index].uncheck();
};
TaskList.prototype.removeTask = function(index) {
  this.tasks.splice(index, 1);
};
TaskList.prototype.render = function() {
  var $markup = $("<ul>");
  var _i;
  for (_i = 0; _i < this.tasks.length; _i += 1) {
    $markup.append(this.tasks[_i].render());
  }
  return $markup;
};
TaskList.prototype.toJson = function() {
  var hash = { title: this.title, tasks: this.tasks };
  return JSON.stringify(hash);
};
TaskList.prototype.save = function() {
  var newId;
  if (this.id == undefined) {
    $.post("http://zhaw.herokuapp.com/task_lists/", this.toJson(), function(
      data
    ) {
      newId = JSON.parse(data).id;
      window.location.hash = newId;
    });
    this.id = newId;
  } else {
    $.post("http://zhaw.herokuapp.com/task_lists/" + this.id, this.toJson());
    window.location.hash = JSON.parse(data).id;
  }
};

TaskList.prototype.load = function() {
  let taskList;
  $.getJSON("http://zhaw.herokuapp.com/task_lists/" + this.id, function() {
    taskList = JSON.parse(data);
    this.id = taskList.id;
    this.title = taskList.title;
    this.tasks = taskList.tasks;
    callback(taskList);
  });
};
