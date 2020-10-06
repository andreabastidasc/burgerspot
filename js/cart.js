$(document).ready(function(){
  addBtn = $('.boton_agregar');
  addBtn.click(assignProduct);
})

function assignProduct() {
  const botones = $('.agregar_carrito');

  for (let i=0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
      cartItems(PRODUCTS[i]);
      cartTotal(PRODUCTS[i]);
    })
  };
};

function setItems (product) {
  let productDropdownContainer = document.getElementById('productDropdownContainer');
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

function savedCartItems () {
  let productAmount = localStorage.getItem('cartItems');
  if (productAmount){ 
    document.getElementById('cartItems').textContent = productAmount;
  }
}

function savedTotal () {
  let myCartTotal = localStorage.getItem('cartTotal');
   if (myCartTotal) {
    document.getElementById('totalCart').textContent = myCartTotal;
    document.getElementById('cart_total').textContent = `${myCartTotal}$`;
   }
}
function removeProduct(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

savedCartItems();
savedTotal();