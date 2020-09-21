$(document).ready(function getData() {
  let dataUrl = './js/data.json';
  $.ajax({
      method: 'GET',
      dataType: 'json',
      url: dataUrl,
  })
  .done( (products) => {
      renderProducts(products);
      PRODUCTS = products;
    })
    .fail(function (error) {
      console.log(error);
    });
})
function renderProducts(products) {
 let menuContainer = $('#menu'); 
 products.forEach(product => {
  menuContainer.append(`
  <div class="${product.class} col-xs-12 col-sm-12 col-md-6 col-lg-6">
    <div class="jumbotron jumbotron_menu bg-transparent">
      <h1 class="titulo_menu">${product.name}</h1>
      <p class="lead contenido_menu">${product.description}</p>
      <p class="titulo_precio titulo_menu">${product.price}$</p>
      <a class="boton_agregar btn btn-lg" role="button" data-toggle="modal" onclick="renderModals('${product.name}')" data-target="#modal${product.modal}">+ AGREGAR AL CARRITO</a>
    </div>
  </div>
`)     
 });
};

