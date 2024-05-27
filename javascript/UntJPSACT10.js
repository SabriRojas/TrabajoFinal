var nombreVariable = "Sabrina";
var apellidoVariable = "Rojas";

resultado = nombreVariable + " " + apellidoVariable; 

console.log(resultado);  

var variable = prompt("Ingrese su nombre");
var edad = prompt("Ingresa su Edad");

edad = Number(edad);

if(edad < 18)
{
    alert("Si no es mayor de edad no podra realizar ninguna compra")
}

alert("Bienvenido a Abu Dhabi Viajes " + variable);