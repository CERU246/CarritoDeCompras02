const container = document.getElementById("container");

const tecnoProductos = [
    {
        producto: "Notebook Lenovo", 
        precio: 899999,
        img: "images/Notebook.jpg",
        estado: "Disponible"
    },
    {
        producto: "Mouse",
        precio: 29999,
        img: "images/mouse.jpg",
        estado: "Disponible"
    },
    {
        producto: "Iphone X",
        precio: 2999999,
        img: "images/iphone.jpg" ,
        estado: "Disponible"
    },
    {
        producto: "Auriculares JBL",
        precio: 149999,
        img: "images/auriculares.jpg",
        estado:"sin stock"
    },
    {
        producto: "Cámara Canon",
        precio: 7999,
        img:"images/camara.jpg",
        estado:"Disponible"
    },
{
    producto: "Teclado Bluetooth", 
    precio: 47999, 
    img: "images/teclado.jpg", 
    estado: "Disponible" 
},
{
    producto: "Reloj Smartwatch", 
    precio: 75999, 
    img: "images/reloj.jpg", 
    estado: "Disponible" 
},
{
    producto: "Joystick PS5", 
    precio: 113999, 
    img: "images/joystick.jpg", 
    estado: "Disponible" 
},
{
    producto: "Control Flow", 
    precio: 11999, 
    img: "images/control.jpg", 
    estado: "Disponible" 
} 
];

    function crearCarta(producto){
        const carta = document.createElement("div");
        carta.className = "cartadiseno";
        
        const imagenP = document.createElement("img");
        imagenP.src = `${producto.img}`;
        imagenP.alt = `${producto.producto}`
        imagenP.className = "imagendiseño";
        
        const nombreP = document.createElement("h3");
        nombreP.innerText = `${producto.producto}`;
        nombreP.className = "nombrediseño";
        
        const precioP = document.createElement("h4");
        precioP.innerText = `$${producto.precio}`;
        precioP.className = "preciodiseño";

        const estadoP = document.createElement("p");
        estadoP.innerHTML = `${producto.estado}`
        
        const vaAlCarrito = document.createElement("button");
        vaAlCarrito.innerText = "Agregar al Carrito";
        vaAlCarrito.className = "buttondiseño";
        vaAlCarrito.addEventListener("click", () => {
        alert(`Compraste ${producto.producto} por $${producto.precio}`);
        agregarAlCarrito(producto);
        });

        carta.appendChild(imagenP);
        carta.appendChild(nombreP);
        carta.appendChild(precioP);
        carta.appendChild(estadoP)
        carta.appendChild(vaAlCarrito);
    
        container.appendChild(carta);
    }

        tecnoProductos.forEach(el => {
            crearCarta(el);
        });

const carroDeCompras = [];

function crearBotonCompras () {

const divdos = document.getElementById("containerdos");
divdos.className = "contaonerdos"

const otroDivisor = document.createElement("div");
otroDivisor.className = "contenidocarro"; 

const spamP = document.createElement("span");
spamP.innerHTML = "&times";
spamP.className = "cerrarcarro";

const hache = document.createElement("h2");
hache.innerText = "Carro de compras";

const unorL = document.createElement("ul");
unorL.className = "itemcarro";
unorL.id = "itemcarro";

const parP = document.createElement("p");
parP.innerText = "Total: $0";
parP.id = "total"

const botonP = document.createElement("button");
botonP.innerText = "Finalizar compra";
botonP.id = "checkout";
botonP.addEventListener("click", () => {
    Swal.fire({
    title: "Excelente",
    text: "Tu compra fue realizada con Éxito",
    icon: "success",
    });
});

otroDivisor.appendChild(spamP);
otroDivisor.appendChild(hache);
otroDivisor.appendChild(unorL);
otroDivisor.appendChild(parP)
otroDivisor.appendChild(botonP);

divdos.appendChild(otroDivisor);

} 

crearBotonCompras();

const contador = document.getElementById("carritocompra");

function agregarAlCarrito(producto) {
    carroDeCompras.push(producto);
    actualizarCarro();
    actualizarTotal();
    guardarProducto();
    }

const totalCompra = document.getElementById("total");

function actualizarCarro () {
    const iteC = document.getElementById("itemcarro");
    iteC.innerHTML = '';
    carroDeCompras.forEach((item, index) => {
        const li = document.createElement("li")
        li.innerText = ` ${item.producto} - $${item.precio}`;
        iteC.appendChild(li)
    });
    contador.textContent = carroDeCompras.length;
}

function guardarProducto () {
    localStorage.setItem("carro", JSON.stringify(carroDeCompras));
}

function actualizarTotal(el){
    const totalP = carroDeCompras.reduce((total, item) => total + item.precio, 0);
    const totalCompra = document.getElementById("total");
    totalCompra.innerText = `Total $${totalP}`;
}

actualizarCarro();
actualizarTotal();
guardarProducto();

