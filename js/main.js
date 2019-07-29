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
    var crustName =' ';
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

  //to get  total toppingPrice and names of selected Toppings
  function toppingPriceTotal(){
       for(var i = 0;i<document.getElementsByName('top_ings').length;i++){
         if(document.getElementsByName('top_ings')[i].checked){
           toppingPrice = toppingPrice+ parseInt(document.getElementsByName('top_ings')[i].value);

           toppingsName = toppingsName + document.getElementsByName('top_ings')[i].id + "," ;
         }
       }
   }

   toppingPriceTotal();

 //object
   var  newPizzaOrder = new pizzaOrder(
    pizzaType,sizePrice,crustPrice,toppingPrice
  );

  // toggle delivery form
  $("p#total").text("TOTAL: "+newPizzaOrder.total()+"ksh");

  $("input[name='delivery']").on("click", function(){
    $(".delivery-form1").toggle(this.value === "false" && this.checked);
  });

  ///alert message from input values ~ delivery form
     var fullname = "";
     var location = "";


    $("form.delivery-form").submit(function(event){
      event.preventDefault();
       fullname = $("#new-full-name").val();
       location = $("#new-location").val();
      alert(fullname + " your Order will be delivered to "+location);
    })


    //output to order summary
    $("div#Orders").append("<p><span class='neworder'> Pizza Type: "+ newPizzaOrder.name + " - "+sizeName+ "</span></p><br>" +
                           "<p><span class='neworder'> Toppings: "+ toppingsName +"</span></p><br> " +
                           "<p><span class='neworder'> Crust: "+ crustName +"</span></p><br>" +
                           "<p><span class='neworder totalorder' > Total in ksh : "+ newPizzaOrder.total()+ "</span></p><br><br>"
                           );

    var pizzaGrandTotal = 0;
    for(var i = 0;i<$('.totalorder').length;i++){
      pizzaGrandTotal  += newPizzaOrder.total();
      $("div#totalOrder").text("Grand Total = "+pizzaGrandTotal+"ksh");


    }

    $(".confirm2").click(function(event){
      alert("Thank-You for ordering with us.Your order will be ready shortly");
      alert($("div#totalOrder").text());
    })



  })







  ///to make order summary to move when screen is scrolled
  // $(window).scroll(function(){
  // $(".ordersummary").css({"margin-top": ($(window).scrollTop()) + "px"});
});
