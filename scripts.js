const dicServicios = [
    {
        nombre: "Análisis Financieros",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/AnalisisFinanciero.jpeg",
        precio: 15000
    },
    
    {
        nombre: "Mejora de Procesos",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/MejoraDeProcesos.jpeg",
        precio: 15000
    },
    {
        nombre: "Analisis legales",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/AnalisisLegal.jpeg",
        precio: 12000
    },
    {
        nombre: "Estudios de Mercado",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/EstudiosDeMercado.jpeg",
        precio: 18000
    },
    {
        nombre: "Asesoramiento en Finanzas Personales",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/FinanzasPersonales.jpeg",
        precio: 15000
    },
    {
        nombre: "Estudios de Proyectos",
        descripcion: "No dudes en consultar",
        imagen: "Imagenes/EstudiosDeProyectos.jpeg",
        precio: 15000

    }
];

let serviciosHTML = "";
for (let indice = 0; indice < dicServicios.length; indice++){
    serviciosHTML += `
        <div class = "servicio">
            <img  src=${dicServicios[indice].imagen}
            alt = "foto de lo que ofrece la empresa de consultoria"
            <div class = "servicio-contenido">
                <h2>${dicServicios[indice].nombre}</h2>
                <h3>Precio: $${dicServicios[indice].precio}</h3>
                <a href="">Ver + info</a>
                <input class="boton-agregar-carrito" type="button" value = "Agregar al carrito">
            </div>
        </div>
`;
};

const servicios = document.getElementById("servicios");
servicios.innerHTML = serviciosHTML;

/*Agregar un listener a los botores de los productos*/
/*Guardar en variables los elementos html que vamos a modificar*/

const botonAgregar = document.querySelectorAll(".boton-agregar-carrito");

const listaCarrito = document.querySelector("#carrito ul");

const totalCarrito = document.querySelector("#carrito p");

const mensajePagarCarrito = document.getElementById("msjCarrito");

const botonBorrar = document.querySelector("#boton-borrar");

const botonPagar = document.querySelector("#boton-pagar");


let totalAPagar = 0;

/*Agregamos el linstener a cada boton*/

for(let indice = 0; indice < botonAgregar.length; indice++){
    function agregarElementoCarrito(){
        const elementoLi = document.createElement("li");
        elementoLi.innerText = `${dicServicios[indice].nombre} $${dicServicios[indice].precio}`;
        listaCarrito.appendChild(elementoLi);
        totalAPagar +=dicServicios[indice].precio;
        totalCarrito.innerText = `Total a pagar: $${totalAPagar}`;
        mensajePagarCarrito.innerText = "";
    }
    botonAgregar[indice].addEventListener("click", agregarElementoCarrito);
}

/*Agregar listener al botón borrar*/

function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerText = "Total a pagar: $0";
    totalAPagar = 0;
    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click",borrarCarrito);

/*Agregar listener al botón pagar*/


function irAPagar(){
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No has seleccionado ningún producto";
    } else {
        window.location.href = "./pagos.html";
    }
}

botonPagar.addEventListener("click", irAPagar);