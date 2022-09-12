

// Objetos sillas

function Sillas(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};

const Sillas1 = new Sillas('madera', 'Antigua', 5200);
const Sillas2 = new Sillas('madera', 'Moderna', 14000);
const Sillas3 = new Sillas('madera', 'Escritorio', 5900);
const Sillas4 = new Sillas('madera', 'Gamer', 13000);
const Sillas5 = new Sillas('metal', 'Antigua', 5000);
const Sillas6 = new Sillas('metal', 'Moderna', 14330);
const Sillas7 = new Sillas('metal', 'Escritorio', 5000);
const Sillas8 = new Sillas('metal', 'Gamer', 54400);
const Sillas9 = new Sillas('plastico', 'Escritorio', 5100);
const Sillas10 = new Sillas('plastico', 'Gamer', 5000);

// Objetos puertas

function Puertas(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};


const PuertasMadera1 = new Puertas('madera', 'Antigua', 50000);
const PuertasMadera2 = new Puertas('madera', 'Moderna', 14000);
const PuertasMadera3 = new Puertas('madera', 'Exterior', 53000);
const PuertasMadera4 = new Puertas('madera', 'Internas', 10000);
const PuertasMetal1 = new Puertas('metal', 'Antigua', 5000);
const PuertasMetal2 = new Puertas('metal', 'Moderna', 14000);
const PuertasMetal3 = new Puertas('metal', 'Exterior', 5000);
const PuertasMetal4 = new Puertas('metal', 'Internas', 5000);
const PuertasPlastico1 = new Puertas('plastico', 'Antigua', 5000);
const PuertasPlastico2 = new Puertas('plastico', 'Moderna', 14000);
const PuertasPlastico3 = new Puertas('plastico', 'Exterior', 5000);
const PuertasPlastico4 = new Puertas('plastico', 'Internas', 5000);


// Objetos alfombras

function Alfombras(material, tipo, precio) {
    this.material =material;
    this.tipo = tipo;
    this.precio = precio;
};


const AlfombrasLana1 = new Alfombras('lana', 'Antigua', 5000);
const AlfombrasLana2 = new Alfombras('lana', 'Moderna', 13500);
const AlfombrasLana3 = new Alfombras('lana', 'Exterior', 5300);
const AlfombrasLana4 = new Alfombras('lana', 'Internas', 11000);




// Array



const alfom = [AlfombrasLana1, AlfombrasLana2, AlfombrasLana3, AlfombrasLana4]
const sill = [Sillas1, Sillas2, Sillas3, Sillas4, Sillas5, Sillas6, Sillas7, Sillas8, Sillas9, Sillas10]
const puert = [PuertasMadera1, PuertasMadera2, PuertasMadera3, PuertasMadera4, PuertasMetal1, PuertasMetal2, PuertasMetal3, PuertasMetal4, PuertasPlastico1, PuertasPlastico2, PuertasPlastico3, PuertasPlastico4]


//constantes

const ul1 = document.getElementById('list1');
const ul2 = document.getElementById('list2');
const ul3 = document.getElementById('list3');
const ul4 = document.getElementById('list4');

// ciclos for


for (const silla of sill) {
    let li = document.createElement('li');
    li.innerHTML = `<div class = 'card'>
    <p>Material: ${silla.material}</p>
    <p>Tipo: ${silla.tipo}</p>
    <p>Precio: $${silla.precio}</p>
    </div>`

    ul1.append(li);
}


for (const puerta of puert) {
    let li = document.createElement('li');
    li.innerHTML = `<div class = 'card'>
    <p>Material: ${puerta.material}</p>
    <p>Tipo: ${puerta.tipo}</p>
    <p>Precio: $${puerta.precio}</p>
    </div>`

    ul2.append(li);
}

for (const alfombra of alfom) {
    let li = document.createElement('li');
    li.innerHTML = `<div class = 'card'>
    <p>Material: ${alfombra.material}</p>
    <p>Tipo: ${alfombra.tipo}</p>
    <p>Precio: $${alfombra.precio}</p>
    </div>`

    ul3.append(li);
}



const search = document.querySelector("#search");



function filtrarPrecios(arr, filtro) {
    const filtrado = arr.filter((el)=>{
        return el.material.includes(filtro);
    });
    return filtrado;
}


search.addEventListener("click", ()=>{

    if (input1.value.toLowerCase() == "silla") {
        console.log("sillas");
        let resultado = filtrarPrecios(sill, input2.value.toLowerCase())
        console.log(resultado);
        console.log(input2.value.toLowerCase());
        for (const el of resultado) {
            let li = document.createElement('li');
            li.innerHTML = `<div class = 'card'>
            <p>Material: ${el.material}</p>
            <p>Tipo: ${el.tipo}</p>
            <p>Precio: $${el.precio}</p>
            </div>`
    
            ul4.append(li);
        }
    } else if (input1.value.toLowerCase() == "puerta") {
        console.log("puertas");
        let resultado = filtrarPrecios(puert, input2.value.toLowerCase())
        console.log(resultado);
        console.log(input2.value.toLowerCase());
        for (const el of resultado) {
            let li = document.createElement('li');
            li.innerHTML = `<div class = 'card'>
            <p>Material: ${el.material}</p>
            <p>Tipo: ${el.tipo}</p>
            <p>Precio: $${el.precio}</p>
            </div>`
    
            ul4.append(li);
        }
    } else {

        console.log("alfombras");
        let resultado = filtrarPrecios(alfom, input2.value.toLowerCase())
        console.log(resultado);
        console.log(input2.value.toLowerCase());
        for (const el of resultado) {
            let li = document.createElement('li');
            li.innerHTML = `<div class = 'card'>
            <p>Material: ${el.material}</p>
            <p>Tipo: ${el.tipo}</p>
            <p>Precio: $${el.precio}</p>
            </div>`
    
            ul4.append(li);
        }
    }


});



