/**
 * java script class for task object
 */
var Task = function(title, done){
	this.title = title;
	this.done = done;
	this.getTitle = function(){
		return this.title;
	};
	this.isDone = function(){
		return this.done;
	};
};
