

alert("Bienvenido(a) al rincon verde...un espacio de jardineria , para salir ingrese 0")

let seleccionarProductos = Number(prompt( "1-maceta $1000 2-fertilizantes $3000 3-tijerasdepodar $2000 "))
let seleccionarCantidad;
let total = 0;


const cantidad = (cant, precio) => {
  return cant * precio
}


while (seleccionarProductos != 0) {
  switch (seleccionarProductos) {
    case 1:
      seleccionarCantidad= Number(prompt("el producto seleccionado es maceta, indique la cantidad"))
            total += cantidad(seleccionarCantidad, 1000)
      break;
      case 2:
        seleccionarCantidad = Number(prompt("el producto seleccionado es fertilizantes, indique la cantidad"))
        total += cantidad(seleccionarCantidad, 3000)
      break;
    case 3:
      seleccionarCantidad = Number(prompt("el producto seleccionado es tijerasdepodar, indique la cantidad"))
      total += cantidad(seleccionarCantidad, 2000)
    break;
    
    default:
      break;
  }
  seleccionarProductos = Number(prompt( "1-maceta $1000 2-fertilizantes $3000 3-tijerasdepodar $2000 "))
}

alert("El total de la compra es de: " + total)


const envio = () => {
    if (total >= 10000) {
      alert("El envio es gratuito")
    }else{
      total += 1000
      alert("El costo de envio es de 1000, el total es: " + total)
    }
}


const metodoDePago = () => {
  let metodo = prompt("Ingresa el metodo de pago, tarjeta o efectivo" )
  if (metodo == "tarjeta") {
    total *= 1.1
    console.log(total);
  }else if ( metodo == "efectivo") {
    total -= 1000
    alert("Genial... tienes un descuento de 1000, el total es: " + total)
  }


}

metodoDePago()