let Task = function(title, id){
    this.done = false;
    this.title = title;
    this.id = id
}

Task.prototype.setTitle = function(title){
    this.title = title;
}

Task.prototype.check = function(){
    this.done = true;
}

Task.prototype.uncheck = function(){
    this.done = false;
}

Task.prototype.render = function() {
    var _checked = this.done ? 'checked="checked"' : "";
    var _title = this.title || "";
    var $div = $("<div>");
    var $checkbox =$("<input class='add-on' name='done' type='checkbox'" +  _checked + ">");
    var $name = $("<input>", {name: 'title', 
                              type: "text", 
                              value: _title, 
                              class: 'span-4'});
    $div.append([$checkbox, $name]);
    $div.data('task', this);
  
    $checkbox.on("change",function(){
      this.done = $(this).parent().data('task').title;
    })
  
    $name.on("key change",function(){
      this.title = $(this).parent().data('task').title;
    })
  
    return $div;
  };
