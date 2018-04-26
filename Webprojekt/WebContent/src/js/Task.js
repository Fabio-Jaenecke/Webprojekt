let Task = function(title, id){
    this.done = false;
    this.title = title;
    this.id = id
}

Task.prototype.check = function(){
    this.done = true;
}

Task.prototype.uncheck = function(){
    this.done = false;
}
Task.prototype.render = function(){
    var $markup = "<div> <input class='add-on' type='checkbox'";
    if(this.done){
        $markup += " checked";
    }
    $markup += "> <input class='span-4' type='text' value='" + this.title + "' taskid='"+this.id+"'></div>";
    return $markup;
}