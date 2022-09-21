
const username = document.getElementById('username');
const password = document.getElementById('password');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');


// si una etiqueta "form" tiene un boton, ala hacer click en el mismo
// nos va a recargar la pagina. Lo que pasa es que el navegador
// interpreta que al hacer clik estamos enviando algun tipo de informacion a algun lado.





// constructor de obj
const usuarios = [];

function informacion(nombre, password) {
    this.nombre = nombre;
    this.password = password;
}



button1.addEventListener('click', (e) => {
    e.preventDefault();

    const nuevoUsuario = new informacion(username.value, password.value);
    usuarios.push(nuevoUsuario);
                    
    console.log(usuarios);
    localStorage.setItem('informacion', JSON.stringify(usuarios));

});


button2.addEventListener('click', (e) => {
    e.preventDefault();

    const info = JSON.parse(localStorage.getItem('informacion'))

    console.log(info);
    
    for (const element of info) {

        const info2 = new informacion(element.nombre, element.password)

        usuarios.push(info2)

    }

    for (const el of usuarios) {
        
        console.log('nombre: ' + el.nombre);
        console.log('clave: ' + el.password);


        if (username.value === el.nombre & password.value === el.password) {
            window.location = "../index.html"
        } else {
            console.log('no ingresó');
        }
    }

});

