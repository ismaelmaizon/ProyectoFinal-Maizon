
// Objetos sillas
/*
const sill = [{material: 'madera', tipo: 'Antigua', precio: 5200, imagen: 'IMG-20220218-WA0023.jpg'},
{material: 'madera', tipo: 'Moderna', precio: 14000, imagen: 'IMG-20220718-WA0025.jpg'},
{material: 'madera', tipo: 'Escritorio', precio: 5900, imagen: 'IMG-20220719-WA0022 (1).jpg'},
{material: 'madera', tipo: 'Gamer', precio: 13000, imagen: 'IMG-20220719-WA0030.jpg'}];


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

const puert = [{material: 'madera', tipo: 'Antigua', precio: 50000, imagen: '110-home_default.jpg'},
{material: 'metal', tipo: 'Moderna', precio: 14000, imagen: '111-home_default.jpg'},
{material: 'plastico', tipo: 'Exterior', precio: 53000, imagen: 'medvidcedro-300x300.jpg'},
{material: 'madera', tipo: 'Interna', precio: 10000, imagen: '101-home_default.jpg'}];


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


const alfom = [{material: 'lana', tipo: 'Antigua', precio: 5000, imagen: 'IMG-20220522-WA0023.jpg'},
{material: 'lana', tipo: 'Moderna', precio: 13500, imagen: 'IMG-20220719-WA0032.jpg'},
{material: 'lana', tipo: 'Exterior', precio: 5300, imagen: 'IMG-20220818-WA0008.jpg'},
{material: 'lana', tipo: 'Internas', precio: 11000, imagen: 'IMG-20220818-WA0010.jpg'}];


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


*/

// Array





//constantes

const art1 = document.getElementById('articulo1');
const art2 = document.getElementById('articulo2');
const art3 = document.getElementById('articulo3');
const art4 = document.getElementById('articulo4');

// ciclos for sillas

const ciclioFS = (arr) => {
    for (const el of arr) {
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
    
        art1.append(articulo);
    }
};
// ciclos for puertas

const ciclioFP = (arr) => {
    for (const el of arr) {
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
    
        art2.append(articulo);
    }
};

// ciclos for alfombras

const ciclioFA = (arr) => {
    for (const el of arr) {
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
    
        art3.append(articulo);
    }
};

// SILLLAS

const respuestaS = async () => {
    const response = await fetch('./sillas.json');

    const data = await response.json();
    ciclioFS(data);
};
respuestaS();

// PUERTAS

const respuestaP = async () => {
    const response = await fetch('./puertas.json');

    const data = await response.json();
    ciclioFP(data);
};
respuestaP();


// ALFOMBRAS

const respuestaA = async () => {
    const response = await fetch('./alfombras.json');

    const data = await response.json();
    ciclioFA(data);
};
respuestaA();


// procesode busqueda

const search = document.querySelector("#search");


// filtrar precio
function filtrarPreciosMenores(arr, filtro) {
    const filtrado = arr.filter((el)=>{
        return el.precio <= filtro;
    });
    return filtrado;
};

// asyn await para filtrar elementos







search.addEventListener("click", ()=>{
    // valor ingresado en input2
    let input2 = document.getElementById("input2").value;
    let input1 = document.getElementById("input1").value.toLowerCase();
    console.log(input1);


    if (input1 == "silla" ) {
        console.log("sillas");

        
        const filter = async () => {
            const response = await fetch('./sillas.json');
        
            const data = await response.json();

            let resultado = filtrarPreciosMenores(data, input2)
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
        };
        filter();

    } else if (input1 == "puerta") {
        console.log("puertas");


        const filter = async () => {
            const response = await fetch('./puertas.json');
        
            const data = await response.json();

            let resultado = filtrarPreciosMenores(data, input2)
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
        };
        filter();
    } else {

        console.log("alfombras");

        
        const filter = async () => {
            const response = await fetch('./alfombras.json');
        
            const data = await response.json();

            let resultado = filtrarPreciosMenores(data, input2)
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
        };
        filter();
    }

});



