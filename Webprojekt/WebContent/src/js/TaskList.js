/**
 * java script class for task list object
 */
var Tasklist = function(title){ 
	this.title = title;
	this.tasks = new Array();
	this.addTask = function(task){
		this.tasks.push(task);
	};
	this.getTasks = function(){
		return tasks;
	};
	this.getTitle = function(){
		return title;
	};
};