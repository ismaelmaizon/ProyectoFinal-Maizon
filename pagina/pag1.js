

let productos = [];

const insert_productos = async () => {
    const response = await fetch('./productos.json');

    const data = await response.json();

    data.forEach(el => {
        productos.push(el)
    });
};
insert_productos();

console.log(productos);

let carrito = [];

//constantes

const art1 = document.getElementById('articulo1');
const art2 = document.getElementById('articulo2');
const search = document.querySelector("#search");
const section = document.getElementById('seccion1');
const compra = document.querySelector('#FinCompra')




// Recorriendo productos

function ciclioFS(arr) {
    for (const el of arr) {

        let articulo = document.createElement('article');
        articulo.innerHTML = `<article class="card">
            <div class="con-text">
                <img src="../imagenes/tarjetas/${el.imagen}" alt="">
                
                <div>
                    <h2>
                        ${el.Elemento}
                        de ${el.material}
                    </h2>
                    <h3>
                        Estilo: ${el.tipo}
                    </h3>
                    <h3>
                        PRECIO: ${el.precio}
                    </h3>
                    <button id="agregar${el.id}">
                        Agregar al carrito
                    </button> 
                </div>    
    
            </div>
        </article>`
    
        art1.append(articulo);

    };
    agregarFuncionAlBoton();

};

const respuestaS = async () => {
    const response = await fetch('./productos.json');

    const data = await response.json();
    ciclioFS(data);
};
respuestaS();




// funcionalidad al boton AGREGAR de productos

function agregarFuncionAlBoton(){

    console.log(productos);
    
    productos.forEach(el => {
        document.querySelector(`#agregar${el.id}`).addEventListener("click", () =>{
            console.log(el);
            agregarAlCarrito(el);
        });
    });

};


// funcionalidad al boton AGREGAR de resultados de busqueda


function agregarFuncionAlBoton2(resul){

    console.log(resul);
    
    resul.forEach(el => {
        document.querySelector(`#agregar${el.id}`).addEventListener("click", () =>{
            console.log(el);
            agregarAlCarrito(el);
        });
    });

};



// procesode busqueda
// asyn await para filtrar elementos

search.addEventListener("click", ()=>{
    // valor ingresado en input2
    let input2 = document.getElementById("input2").value;
    let input1 = document.getElementById("input1").value.toLowerCase();
    console.log(productos);


    let resultado = filtrarPreciosMenores(productos, input2, input1)
    console.log(resultado);
    console.log(input2);
    for (const el of resultado) {
        let articulo = document.createElement('article');
        articulo.innerHTML = `<article class="card">
            <div class="con-text">
                <img src="../imagenes/tarjetas/${el.imagen}" alt="">
                
                <div>
                    <h2>
                        ${el.Elemento}
                        de ${el.material}
                    </h2>
                    <h3>
                        Estilo: ${el.tipo}
                    </h3>
                    <h3>
                        PRECIO: ${el.precio}
                    </h3>
                    <button id="agregar${el.id}">
                        Agregar al carrito
                    </button>  
                </div>
                
                

            </div>
        </article>`

        art2.append(articulo);         
    }
    agregarFuncionAlBoton2(resultado);
    
});


// Renderizar carrito


function renderCarrito(){
    //esto limpia el HTML cosa de no repetir la info que se encuentra en el carrito
    section.innerHTML = ``

    carrito.forEach(prod =>{
        let seccion = document.createElement("div");
        
        seccion.innerHTML = `
            <div class="carrito_div">
                <div class="carrito_div_info">
                    <h2>Producto: ${prod.Elemento}</h2>
                    <h3>Precio: ${prod.precio}</h3>
                    <h3>Cantidad: ${prod.cantidad}</h3>
                    <button id="borrar${prod.id}" class="borrar">Eliminar</button>
                </div>
                <div class="carrito_div_imag">
                    <img src="../imagenes/tarjetas/${prod.imagen}" width="200px" height="300px">
                </div>
            </div>
          `
        
        section.append(seccion);
    })
    borrarProducto()
}


// comprar

compra.addEventListener('click', ()=>{
    console.log("comprar");

    const ingresarEmail = async () => {

        const { value: email } = await Swal.fire({
          title: 'Porfavor Ingrese un email',
          input: 'email',
          inputLabel: 'Con el mismo nos estaremos contactando',
          inputPlaceholder: 'Enter your email address'
        })
        
        if (email) {
          Swal.fire(`Entered email: ${email}`)
        }

        mensajeCompraCompleta();
        
    };

    ingresarEmail();

})



// FUNCIONES


// filtrar precio
function filtrarPreciosMenores(arr, pre, elemento ) {
    
    const filtrado = arr.filter((el)=>{
        if (el.Elemento === elemento) {
            return el.precio <= pre;
        } else if (el.Elemento === elemento) {
            return el.precio <= pre;
        } else if (el.Elemento === elemento) {
            return el.precio <= pre;
        };
    });
    return filtrado;
    
}


// funcion para agregar al carrito
function agregarAlCarrito(producto){
    let existe = carrito.some(prod => prod.id === producto.id)
    if(existe === false) {
        producto.cantidad = 1;
        carrito.push(producto)
        console.log("carrito");
        console.log(carrito);
    }else{
        let prodFind = carrito.find(prod => prod.id === producto.id)
        prodFind.cantidad++;
    }
    console.log(carrito);

    renderCarrito();
};




// funcion para eliminar del carrito
function borrarProducto(){
    carrito.forEach(el => {
        document.querySelector(`#borrar${el.id}`).addEventListener("click", () =>{
            let indice = carrito.findIndex(e => e.id === el.id);
            carrito.splice(indice, 1);
            renderCarrito();
        });
    });
}



function mensajeCompraCompleta() {
    Swal.fire({
        icon: 'success',
        title: 'COMPRA COMPLETADA',
        text: 'en un momento nos podremos en contacto',
        footer: '<a href="../pagina/pag1.html">Volver a la pagina</a>'
    });
    
    
}
