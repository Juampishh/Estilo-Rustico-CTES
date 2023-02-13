const productos = [
    {
        id: "item 1",
        titulo: "item 1",
        imagen: "./assets_catalogo/IMG/item 1.jpg",
        categoria: {
            nombre: "Antitermico",
            id: "Antitermicos"
        },
        precio: 1000
    },
    {
        id: "item 2",
        titulo:"item 2",
        imagen:"./assets_catalogo/IMG/item 2.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    },
    {
        id: "item 3",
        titulo: "item 3",
        imagen: "./assets_catalogo/IMG/item 3.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 4",
        titulo: "item 4",
        imagen: "./assets_catalogo/IMG/item 4.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 5",
        titulo: "item 5",
        imagen: "./assets_catalogo/IMG/item 5.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 6",
        titulo: "item 6",
        imagen: "./assets_catalogo/IMG/item 6.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 7",
        titulo: "item 7",
        imagen: "./assets_catalogo/IMG/item 7.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 8",
        titulo: "item 8",
        imagen: "./assets_catalogo/IMG/item 8.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 9",
        titulo: "item 9",
        imagen: "./assets_catalogo/IMG/item 9.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 10",
        titulo: "item 10",
        imagen: "./assets_catalogo/IMG/item 10.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 11",
        titulo: "item 11",
        imagen: "./assets_catalogo/IMG/item 11.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 12",
        titulo: "item 12",
        imagen: "./assets_catalogo/IMG/item 12.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 13",
        titulo: "item 13",
        imagen: "./assets_catalogo/IMG/item 13.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 14",
        titulo: "item 14",
        imagen: "./assets_catalogo/IMG/item 14.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 15",
        titulo: "item 15",
        imagen: "./assets_catalogo/IMG/item 15.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 16",
        titulo: "item 16",
        imagen: "./assets_catalogo/IMG/item 16.jpg",
        categoria: {
            nombre: "Revestimiento",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 17",
        titulo: "item 17",
        imagen: "./assets_catalogo/IMG/item 17.jpg",
        categoria: {
            nombre: "Loseta",
            id: "Pisos"
        },
        precio: 1000
    },
            
];

const card = document.querySelector('.card');



function cargarElementos(productos){


    card.innerHTML = "";

    productos.forEach(producto =>{


        card.innerHTML = `
        <div class="circle"></div>
            <div class="content">
            <h2>Revestimiento</h2>
            <p>Revestimiento de pared</p>
            <a class="btn-buy" href="./catalogo.html">Comprar ahora</a>
        </div>
            <img src="./assets_catalogo/IMG/item 3.jpg" alt="">
        `
    })

    
};

window.addEventListener('scroll', cargarElementos);