
// Objetos sillas

function Sillas(material, tipo, precio, img) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
    this.imagen = img;
};

const Sillas1 = new Sillas('madera', 'Antigua', 5200, 'IMG-20220218-WA0023.jpg');
const Sillas2 = new Sillas('madera', 'Moderna', 14000, 'IMG-20220718-WA0025.jpg');
const Sillas3 = new Sillas('madera', 'Escritorio', 5900, 'IMG-20220719-WA0022 (1).jpg');
const Sillas4 = new Sillas('madera', 'Gamer', 13000, 'IMG-20220719-WA0030.jpg');

// Objetos puertas

function Puertas(material, tipo, precio, img) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
    this.imagen = img;
};


const PuertasMadera1 = new Puertas('madera', 'Antigua', 50000, '110-home_default.jpg');
const PuertasMadera2 = new Puertas('metal', 'Moderna', 14000, '111-home_default.jpg');
const PuertasMadera3 = new Puertas('plastico', 'Exterior', 53000, 'medvidcedro-300x300.jpg');
const PuertasMadera4 = new Puertas('madera', 'Internas', 10000, '101-home_default.jpg');

// Objetos alfombras

function Alfombras(material, tipo, precio, img) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
    this.imagen = img;

};


const AlfombrasLana1 = new Alfombras('lana', 'Antigua', 5000,'IMG-20220522-WA0023.jpg');
const AlfombrasLana2 = new Alfombras('lana', 'Moderna', 13500, 'IMG-20220719-WA0032.jpg');
const AlfombrasLana3 = new Alfombras('lana', 'Exterior', 5300, 'IMG-20220818-WA0008.jpg');
const AlfombrasLana4 = new Alfombras('lana', 'Internas', 11000, 'IMG-20220818-WA0010.jpg');




// Array



const alfom = [AlfombrasLana1, AlfombrasLana2, AlfombrasLana3, AlfombrasLana4]
const sill = [Sillas1, Sillas2, Sillas3, Sillas4]
const puert = [PuertasMadera1, PuertasMadera2, PuertasMadera3, PuertasMadera4]


//constantes

const art1 = document.getElementById('articulo1');
const art2 = document.getElementById('articulo2');
const art3 = document.getElementById('articulo3');
const art4 = document.getElementById('articulo4');

// ciclos for


for (const silla of sill) {
    let articulo = document.createElement('article');
    articulo.innerHTML = `<article class="card">
        <div class="con-text">
            <img src="../imagenes/tarjetas/${silla.imagen}" alt="">
            
            <div>
                <h2>
                    Silla
                    de ${silla.material}
                </h2>
                <h3>
                    Estilo: ${silla.tipo}
                </h3>
                <h3>
                    PRECIO: ${silla.precio}
                </h3>
                <button>
                    comprar
                </button> 
            </div>
            
            

        </div>
    </article>`

    art1.append(articulo);
}


for (const puerta of puert) {
    let articulo = document.createElement('article');
    articulo.innerHTML = `<article class="card">
        <div class="con-text">
            <img src="../imagenes/tarjetas/${puerta.imagen}" alt="">            
            <div>
                <h2>
                    Puerta
                    de ${puerta.material}
                </h2>
                <h3>
                    Estilo: ${puerta.tipo}
                </h3>
                <h3>
                    PRECIO: ${puerta.precio}
                </h3>
                <button>
                    comprar
                </button> 
            </div>
            
            

        </div>
    </article>`

    art2.append(articulo);
}

for (const alfombra of alfom) {
    let articulo = document.createElement('article');
    articulo.innerHTML = `<article class="card">
        <div class="con-text">
            <img src="../imagenes/tarjetas/${alfombra.imagen}" alt="">            
            <div>
                <h2>
                    Alfombras
                    de ${alfombra.material}
                </h2>
                <h3>
                    Estilo: ${alfombra.tipo}
                </h3>
                <h3>
                    PRECIO: ${alfombra.precio}
                </h3>
                <button>
                    comprar
                </button> 
            </div>
            
            

        </div>
    </article>`

    art3.append(articulo);
}

/////////////////////////////////////////////////////////////////////////

// procesode busqueda

const search = document.querySelector("#search");


// se llama filtrar precio pero en realidad filtra material por el momento
function filtrarPreciosMenores(arr, filtro) {
    const filtrado = arr.filter((el)=>{
        return el.precio <= filtro;
    });
    return filtrado;
}





search.addEventListener("click", ()=>{
    // valor ingresado en input2
    let input2 = document.getElementById("input2").value;
    let input1 = document.getElementById("input1").value.toLowerCase();
    console.log(input1);


    if (input1 == "silla" ) {
        console.log("sillas");
        let resultado = filtrarPreciosMenores(sill, input2)
        console.log(resultado);
        console.log(input2);
        for (const el of resultado) {
            let articulo = document.createElement('article');
            articulo.innerHTML = `<article class="card">
                <div class="con-text">
                    <img src="../imagenes/tarjetas/${el.imagen}" alt="">
                    
                    <div>
                        <h2>
                            Silla
                            de ${el.material}
                        </h2>
                        <h3>
                            Estilo: ${el.tipo}
                        </h3>
                        <h3>
                            PRECIO: ${el.precio}
                        </h3>
                        <button>
                            comprar
                        </button> 
                    </div>
                    
                    

                </div>
            </article>`

            art4.append(articulo);         
        }

    } else if (input1 == "puerta") {
        console.log("puertas");
        let resultado = filtrarPreciosMenores(puert, input2)
        console.log(resultado);
        console.log(input2);
        for (const el of resultado) {            let articulo = document.createElement('article');
            articulo.innerHTML = `<article class="card">
                <div class="con-text">
                    <img src="../imagenes/tarjetas/${el.imagen}" alt="">
                    
                    <div>
                        <h2>
                            Puerta
                            de ${el.material}
                        </h2>
                        <h3>
                            Estilo: ${el.tipo}
                        </h3>
                        <h3>
                            PRECIO: ${el.precio}
                        </h3>
                        <button>
                            comprar
                        </button> 
                    </div>
                    
                    

                </div>
            </article>`

            art4.append(articulo);
        }
    } else {

        console.log("alfombras");
        let resultado = filtrarPreciosMenores(alfom, input2)
        console.log(resultado);
        console.log(input2);
        for (const el of resultado) {
            let articulo = document.createElement('article');
            articulo.innerHTML = `<article class="card">
                <div class="con-text">
                    <img src="../imagenes/tarjetas/${el.imagen}" alt=              
                    <div>
                        <h2>
                            Alfombra
                            de ${el.material}
                        </h2>
                        <h3>
                            Estilo: ${el.tipo}
                        </h3>
                        <h3>
                            PRECIO: ${el.precio}
                        </h3>
                        <button>
                            comprar
                        </button> 
                    </div>
                    
                    

                </div>
            </article>`

            art4.append(articulo);
        }
    }

});



