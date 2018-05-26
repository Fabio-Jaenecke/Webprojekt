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
  var newId = 0;
  if (this.id == undefined) {
    $.post("http://zhaw.herokuapp.com/task_lists/", this.toJson());
    this.id = 1;
    console.log("the new id", this.id);
  } else {
    $.post(
    "http://zhaw.herokuapp.com/task_lists/" + this.id, this.toJson());
    newId = JSON.parse(this.id).id;
    console.log("the new id", this.id);
    this.id += 1; 
  }
};

TaskList.prototype.counter = function() {
    window.location.hash = hashcounter + "expanded" + (hashcounter - 10) + "tasks";
    hashcounter += 1;
};



TaskList.prototype.load = function() {
  let taskList;
  var _k;
  if (window.location.hash){
        var index = window.location.hash.substring(1, 3);
        for (_k = 10; _k < index; _k += 1) {
          tasklist.addTask(new Task("Additional Task " + (_k - 9)));
          /*TODO: Get the actual TASK (newID) instead of a placeholder - Konnte das nicht herausfinden. Der Task sollte ja jetzt im JSON gespeichert sein (wurde ja geparsed). Jetzt ist nur doch die Frage, wie wie diesen Task auslesen können.
          */
        }
  };
  $.getJSON("http://zhaw.herokuapp.com/task_lists/" + this.id,  function() {
    taskList = JSON.parse(data);
    this.id = taskList.id;
    this.title = taskList.title;
    this.tasks = taskList.tasks;
    callback(taskList);
  });
     
};
