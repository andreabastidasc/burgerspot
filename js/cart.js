//Listener para llamar a la función que asigna el producto
$(document).ready(function(){
  addBtn = $('.boton_agregar');
  addBtn.click(assignProduct);
})
//función que asigna productos
function assignProduct() {
  const botones = $('.agregar_carrito');

  for (let i=0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
      cartItems(PRODUCTS[i]);
      cartTotal(PRODUCTS[i]);
    })
  };
};
//función para setear los productos en el storage
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
//función para setear la cantidad de productos en el storage y en el HTML
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
//función que sumna al total el producto seleccionado
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
//Muestra la cantidad de elementos en el HTML
function savedCartItems () {
  let productAmount = localStorage.getItem('cartItems');
  if (productAmount){ 
    document.getElementById('cartItems').textContent = productAmount;
  }
}
//Muestra el total en el HTML
function savedTotal () {
  let myCartTotal = localStorage.getItem('cartTotal');
   if (myCartTotal) {
    document.getElementById('totalCart').textContent = myCartTotal;
    document.getElementById('cart_total').textContent = `${myCartTotal}$`;
   }
}
//Crea el HTML del carrito
function productTable () {
  let cartProducts = localStorage.getItem('productsInCart');
  cartProducts = JSON.parse(cartProducts);
  let productContainer = document.getElementById('product_container');

  if (cartProducts) {
    productContainer.innerHTML = '';
    Object.values(cartProducts).map(item => {
      productContainer.innerHTML += 
      `
      <tr>
           <td id="product_table_container">
           <button class="deleteButton"><i class="far fa-times-circle"></i></button>
           ${item.name}
           </td>
           <td><span class="badge badge-pill badge-dark">${item.inCart}</span></td>
           <td>${item.price}$</td>
      </tr>
      `
    });
  }
  deleteButtons();
}
productTable();
//función para eliminar el HTML de los productos y el storage
function deleteButtons() {
  let deleteButtons = document.querySelectorAll('.deleteButton');
  let productName;
  let productAmount = localStorage.getItem('cartItems');
  let cartItems = localStorage.getItem('productsInCart');
  let cartTotal = localStorage.getItem('cartTotal')
  cartItems = JSON.parse(cartItems);
  for (let i=0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener('click', () => {
      productName = deleteButtons[i].parentElement.textContent.trim();
      localStorage.setItem('cartItems', productAmount - cartItems[productName].inCart);
      localStorage.setItem('cartTotal', cartTotal - (cartItems[productName].price * cartItems[productName].inCart));

      delete cartItems[productName];
      localStorage.setItem('productsInCart', JSON.stringify(cartItems));

      location.reload()
    })
  }
}

//función para eliminar todo el contenido del carrito
$('#clear_button').click(function clearStorage(){
  window.localStorage.clear()
  location.reload()
})

savedCartItems();
savedTotal();