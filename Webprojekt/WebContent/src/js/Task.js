let Task = function(title){
    //Du willst kein task erstellen der schon angehakt ist :D
    this.done = false;
    this.title = title;
}

Task.prototype.check = function(){
    this.done = true;
}

Task.prototype.uncheck = function(){
    this.done = false;
}