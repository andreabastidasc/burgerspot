let combos = document.querySelectorAll('.titulo_precio'); 
let date = new Date(); 
let currentDay = date.getDay();

if (currentDay === 1 || currentDay === 4) {
  combos.forEach(combo => {
    let precio = parseInt (combo.innerHTML)*0.5;
    combo.innerHTML = `$${precio} Hoy -50%`;
    console.log (precio);
 });
}
$(document).ready(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() > 50) { 
        $('.navbar').removeClass('bg-transparent');
    } else {
        $('.navbar').addClass('bg-transparent');
    }
  });
});
/*
let Productos = function (nombre, precio){
  this.nombre=nombre;
  let.precio=precio;
}

let producto1 = new Productos ('combo burger', 350);
let producto2 = new Productos('combo vegan', 320);
let producto3 = new Productos ('fritas', 250);
let producto4 = new Productos ('milkshake', 180);

let Combo = function (burger,bacon, fritas,cheddar,bebida) {
  this.burger=burger;
  this.bacon= prompt('Agregar bacon a su burger por 20$');
  this.fritas=fritas;
  this.cheddar= prompt ('Agregar cheddar y panceta a sus papas por 10$');
  this.bebida= prompt ('Elija una bebida');
}

let comboBurger = new Combo ('burger clásica', 'fritas', '', '');
let comboVegan = new Combo ('burger vegan', 'fritas', '','');

let ShoppingCart = function () {
  let cart = [];
  
  this.agregar = function (producto) {
    cart.push (roducto)
  }
  
  this.verCarrito = () => cart;
}

let myShoppingCart = new ShoppingCart();

myShoppingCart.agregar(producto2);
myShoppingCart.agregar(producto4);

let totalCarrito = myShoppingCart.verCarrito();
*/
