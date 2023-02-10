const productosCarrito = localStorage.getItem('productos-en-carrito');
const productosExtraidos = JSON.parse(productosCarrito);
let totalCompra = [];
let arrayDeProductosExtraidos = [];

const obtenerProductsLS = () =>{
  productosExtraidos.forEach(element => {

    arrayDeProductosExtraidos.push(element.categoria.nombre);
    totalCompra.push(element.precio);
  });

}

obtenerProductsLS()


document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  const telefono = "543777382757";

  const cliente = document.querySelector("#cliente").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const empleado = document.querySelector("#empleado").value;
  const servicio = document.querySelector("#servicio").value;
  const resp = document.querySelector("#respuesta");



 
  
  
  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Estilo Rustico_*%0A
		*Reservas*%0A%0A
		*Nombre y Apellido*%0A
		${cliente}%0A
		*Fecha de tu reserva*%0A
		${fecha}%0A
		*Numero de contacto*%0A
		${hora}%0A
    *Medio de pago*%0A
		${empleado}%0A
		*Puntue su experiencia*%0A
		${servicio}%0A
    *Productos Seleccionados*%0A
		${arrayDeProductosExtraidos}.%0A
		*Valor total de la compra*%0A
		$${totalCompra.reduce((a, b) => a + b, 0)}%0A
    `;

  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${cliente}`;

  window.open(url);

  productosEnCarrito.length = 0;
  localStorage.setItem("productos-en-carrito",JSON.stringify(productosEnCarrito));

});

