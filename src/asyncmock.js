const productos = [{
    nombre: "Piluso Flores",
    precio: 1500,
    id: "1",
    imagen: "/img/img-producto1.jpg",
    idCat: "2"
},
{
    nombre: "Almohadon Lila",
    precio: 2000,
    id: "2",
    imagen: "/img/img-producto2.jpg",
    idCat: "2"
},
{
    nombre: "Remera negra",
    precio: 5000,
    id: "3",
    imagen: "/img/img-producto3.jpeg",
    idCat: "1"
},
{
    nombre: "Almohadon Rosa",
    precio: 3000,
    id: "4",
    imagen: "/img/img-producto4.jpg",
    idCat: "2"
},
{
    nombre: "Sweater Ondas",
    precio: 3500,
    id: "5",
    imagen:"/img/img-producto5.jpg",
    idCat: "1"
},
{
    nombre: "Sweater Cuadros",
    precio: 3500,
    id: "6",
    imagen: "/img/img-producto6.jpg",
    idCat: "1"
},
{
    nombre: "Remera  violeta",
    precio: 5000,
    id:"7",
    imagen: "/img/img-producto7.jpeg",
    idCat: "1"
},
{
    nombre: "Remera roja",
    precio: 5000,
    id: "8",
    imagen: "/img/img-producto8.jpeg",
    idCat: "1"
}]

export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve =>{
        setTimeout( () =>{
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getCategoria = (idCategoria) => {
    return new Promise(resolve =>{
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}