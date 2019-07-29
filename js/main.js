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
