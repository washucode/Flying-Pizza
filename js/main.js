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

  //to get pizza type names
    function pizzaTypeValue(){
      if($("#Modal1").is(':visible')){
        pizzaType = 'For Meat Lovers';
      }else if ($("#Modal2").is(':visible')) {
        pizzaType = "Chicken Tikka";

      }else if ($("#Modal3").is(':visible')) {
        pizzaType = "Something Veggie";

      }else if ($("#Modal4").is(':visible')) {
        pizzaType = "PLainly Cheesey";

      }else if ($("#Modal5").is(':visible')) {
        pizzaType = "BBQ Steak";

      }else if ($("#Modal6").is(':visible')) {
        pizzaType = "Hawaiian";

      }else if ($("#Modal7").is(':visible')) {
        pizzaType = "Chicken & Beef";

      }else if ($("#Modal8").is(':visible')) {
        pizzaType = "Combination";

      }



  }
  pizzaTypeValue();


  })



})
