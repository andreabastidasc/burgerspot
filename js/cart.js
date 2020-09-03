const botones = document.querySelectorAll('.boton_agregar');
for (let i=0; i < botones.length; i++) {
  botones[i].addEventListener('click', () => {
    cartItems(products[i])
    cartTotal(products[i])
  })
}

function savedCartItems () {
  let productAmount = localStorage.getItem('cartItems');
  if (productAmount){ 
    document.getElementById('cartItems').textContent = productAmount;
  }
}

function cartItems (product) {
  let productAmount = localStorage.getItem('cartItems');
  productAmount = parseInt(productAmount);

  if (productAmount) {
    localStorage.setItem('cartItems', productAmount + 1);
    document.getElementById('cartItems').textContent = productAmount + 1;
  } else {
    localStorage.setItem('cartItems', 1);
    document.getElementById('cartItems').textContent = 1;
  }
  setItems(product);
}

function setItems (product) {
  let productsInCart = localStorage.getItem('productsInCart');
  productsInCart = JSON.parse(productsInCart);

  if (productsInCart != null) {

    if (productsInCart[product.name] == undefined) {
      productsInCart = {
        ...productsInCart, 
        [product.name]: product
      }
    }
    productsInCart[product.name].inCart += 1;

  } else {
    product.inCart = 1

    productsInCart = {
      [product.name]: product 
    }
  }
  localStorage.setItem('productsInCart', JSON.stringify(productsInCart));
}

function savedTotal () {
  let myCartTotal = localStorage.getItem('cartTotal');
   if (myCartTotal) {
    document.getElementById('totalCart').textContent = myCartTotal;
   }
}

function cartTotal (product) {
  let myCartTotal = localStorage.getItem('cartTotal');

  if (myCartTotal != null) {
    myCartTotal = parseInt(myCartTotal); 
    localStorage.setItem('cartTotal', myCartTotal + product.price);
    document.getElementById('totalCart').textContent = myCartTotal + product.price;
  } else {
    localStorage.setItem ('cartTotal', product.price);
    document.getElementById('totalCart').textContent = product.price;
  }
  
}

savedCartItems();
savedTotal()
/*
let combos = document.querySelectorAll('.titulo_precio'); 
let date = new Date(); 
let currentDay = date.getDay();

if (currentDay === 1 || currentDay === 3) {
  combos.forEach(combo => {
    let precio = parseInt (combo.innerHTML)*0.5;
    combo.innerHTML = `$${precio} (-50%)`;
    console.log (precio);
 });
}
*/