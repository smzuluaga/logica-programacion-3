/* 
Crear un programa en Javascript que realice lo siguiente:
    * Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
    * Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
    * Debe imprimir ambos resultados por consola o por el DOM.
    * Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
*/  


// isNaN(dataFromValue) ? alert("El dato ingresado no corresponde a un valor válido. \n DEBE INGRESAR UN VALOR NUMÉRICO") : convertirTemperatura(inputCelcius);



// MANIPULACION DEL DOM 
function calcular() {
    let dataFrom = document.getElementById("dataFrom");
    let showFactorial = document.getElementById("showFactorial");

    let dataFromValue = parseFloat(dataFrom.value);

    if (!Number(dataFromValue)){
        alert ("El dato que ingreso no es un número. \nIngrese un valor válido")
        document.getElementById("dataFrom").value = "";
        document.getElementById("showTemperatura1").innerHTML = "";
        document.getElementById("showTemperatura2").innerHTML = "";

        return 
    }

    if (dataFromValue % 1 !== 0){
        alert ("El número que ingresó no es entero. Ingrese un número entero para continuar");
        return;
    }
    
    let factorial = 1;
    
    for (let i = dataFromValue; i > 0; i--){
        factorial *= i;
    }
    
    showFactorial.innerHTML = `La factorial de ${dataFromValue} es ${factorial}`;
}


function limpiar () {
    dataFrom.value="";
    showFactorial.innerHTML="";
}