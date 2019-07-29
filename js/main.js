// business logic

function pizzaOrder (name,size,crust,topping)
{
  this.name =name;
  this.size =size;
  this.crust = crust;
  this.topping = topping;
}

pizzaOrder.prototype.total= function(){
  return this.size+this.crust+this.topping;

}


// user logic

$(document).ready(function(){



  $("form#neworder").submit(function(event) {
    event.preventDefault();


    var pizzaType;
    var sizePrice = 0;
    var crustPrice = 0;
    var toppingPrice = 0;
    var sizeName;
    var crustName;
    var toppingsName = ' ';
    
  })



})
