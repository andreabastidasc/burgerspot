function productDropdown () {
    let cartProducts = localStorage.getItem('productsInCart');
    console.log (cartProducts)
    cartProducts = JSON.parse(cartProducts);
    let productDropdownContainer = document.getElementById('productDropdownContainer');
  
    if (cartProducts) {
      productDropdownContainer.innerHTML = '';
      Object.values(cartProducts).map(item => {
        productDropdownContainer.innerHTML += 
        `
        <p class="dropdown-item">${item.name} 
        <span>[${item.inCart}]</span> 
        <span>$${item.price}</span> <button id="clearButton" type="button" class="btn btn-sm btn-dark">X</button></p>
        `
      });
    }
  }
productDropdown();