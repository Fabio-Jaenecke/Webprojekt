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
  return JSON.stringify({ title: this.title, tasks: this.tasks });
};
TaskList.prototype.save = function() {
  if (this.id == undefined) {
    let newId;
    $.post("http://zhaw.herokuapp.com/task_lists/", this.toJson(), function(
      data
    ) {
      newId = JSON.parse(data).id;
    });
    this.id = newId;
    console.log("the new id", newId);
  } else {
    $.post(
      "http://zhaw.herokuapp.com/task_lists/" + this.id,
      this.toJson(),
      function(data) {}
    );
  }
};
TaskList.prototype.load = function() {
  let taskList;
  $.getJSON("http://zhaw.herokuapp.com/task_lists/" + this.id, function(data) {
    taskList = JSON.parse(data);
    this.id = taskList.id;
    this.title = taskList.title;
    this.tasks = taskList.tasks;
    callback(taskList);
  });
};
