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

  // to get  price per size and size name

  function pizzaSizeValue(){
        for(var i = 0;i<document.getElementsByName('pizzasize').length;i++){
          if(document.getElementsByName('pizzasize')[i].checked){
             sizePrice = parseInt(document.getElementsByName('pizzasize')[i].value);
             sizeName = document.getElementsByName('pizzasize')[i].id;
          }
        }
    }

    pizzaSizeValue();


// to get crust name and Value
  function pizzaCrustValue(){
      for(var i = 0;i<document.getElementsByName('pizzacrust').length;i++){
        if(document.getElementsByName('pizzacrust')[i].checked){
           crustPrice = parseInt(document.getElementsByName('pizzacrust')[i].value);
           crustName = document.getElementsByName('pizzacrust')[i].id;
        }
      }
  }

  pizzaCrustValue();

  //to get  toppingPrice
  function toppingPriceTotal(){
       for(var i = 0;i<document.getElementsByName('top_ings').length;i++){
         if(document.getElementsByName('top_ings')[i].checked){
           toppingPrice = toppingPrice+ parseInt(document.getElementsByName('top_ings')[i].value);

           toppingsName = toppingsName + document.getElementsByName('top_ings')[i].id + "," ;
         }
       }
   }

   toppingPriceTotal();



  })



})
