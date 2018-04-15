let Task = function(title){
    this.done = false;
    this.title = title;
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
    $markup += "> <input class='span-4' type='text' value='" + this.title + "'></div>";
    return $markup;
}