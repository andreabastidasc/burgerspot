//Función que construye le HTML del menú
$(document).ready(function renderProducts () {
  let menuContainer = $('#menu');
  PRODUCTS.forEach(product => 
    menuContainer.append(
      `<div class="${product.class} col-xs-12 col-sm-12 col-md-6 col-lg-6">
      <div class="jumbotron jumbotron_menu bg-transparent">
        <h1 class="titulo_menu">${product.name}</h1>
        <p class="lead contenido_menu">${product.description}</p>
        <p class="titulo_precio titulo_menu">${product.price}$</p>
        <a class="boton_agregar btn btn-lg" role="button" data-toggle="modal" onclick="renderModals('${product.name}')" data-target="#modal${product.modal}">+ AGREGAR AL CARRITO</a>
      </div>
      </div>`
    )  
  )
});
//Función que construye el HTML del modal
function renderModals() {
  let modalContainer = $('#modal_container');
  PRODUCTS.forEach (product => {
    if (product.name == 'COMBO BURGER + FRITAS' || product.name == 'FRITAS') {
      modalContainer.append(`
      <div id="modal${product.modal}" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">${product.name}</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-6">
                    <h2>Extras</h2>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Bacon</label>
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Cheddar</label>
                    </div>
                  </div>
                  <div class="col-6">
                    <h2>Bebida</h2>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                      <label class="form-check-label" for="exampleRadios1">
                        Coca
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                      <label class="form-check-label" for="exampleRadios2">
                        Sprite
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                      <label class="form-check-label" for="exampleRadios2">
                        Agua
                      </label>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
                      <label class="form-check-label" for="exampleRadios3">
                        Sin bebida
                      </label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Comentarios</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
            <div class="modal-footer">
              <h3>Precio: ${product.price}$</h3>
              <button type="button" class="agregar_carrito btn btn-primary">Agregar</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
      `) 
    } else if (product.name == 'COMBO VEGAN + FRITAS') {
      modalContainer.append(`
        <div id="modal${product.modal}" class="modal fade" tabindex="-1" role="dialog">
         <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">${product.name}</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
              <div class="modal-body">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <h2>Burger</h2>
                      <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Portobello</label>
                      </div>
                      <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Lentejas</label>
                      </div>
                    </div>
                    <div class="col-6">
                      <h2>Bebida</h2>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
                        <label class="form-check-label" for="exampleRadios1">
                          Coca
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                          Sprite
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                        <label class="form-check-label" for="exampleRadios2">
                          Agua
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3">
                        <label class="form-check-label" for="exampleRadios3">
                          Sin bebida
                        </label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-group">
                        <label for="exampleFormControlTextarea1">Comentarios</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                      </div>
                    </div>
                  </div>
    
                </div>
              </div>
              <div class="modal-footer">
                <h3>Precio: ${product.price}$</h3>
                <button type="button" class="agregar_carrito btn btn-primary">Agregar</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
         </div>
        </div>
        `) 
    } else if (product.name == 'MILKSHAKE'){
      modalContainer.append(`
      <div id="modal${product.modal}" class="modal fade" tabindex="-1" role="dialog">
       <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
               <h5 class="modal-title">${product.name}</h5>
               <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
               </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12">
                    <h2>Milkshake</h2>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Oreo</label>
                    </div>
                    <div class="form-group form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1">
                      <label class="form-check-label" for="exampleCheck1">Vainilla</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Comentarios</label>
                      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <h3>Precio: ${product.price}$</h3>
              <button type="button" class="agregar_carrito btn btn-primary">Agregar</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
       </div>
       </div>
      </div>
      `) 
    }
  })
}

