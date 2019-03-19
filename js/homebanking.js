//Declaración de variables
var nombreUsuario = "";
var saldoCuenta = 0;
var limiteExtraccion = 0;

var camiloDominguez = {
    nombreUsuario:"Camilo Dominguez",
    saldoCuenta:3400,
    limiteExtraccion: 1000,
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
    iniciarSesion();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var limiteNuevo = prompt("Cambia tu limite de Extraccion");

    if (limiteNuevo === "") {
        alert("No ingresaste ningun monto tu Limite actual es " + "$" + limiteExtraccion);

    } else if (limiteNuevo) {
        calc(parseFloat(limiteNuevo),"lim","Limite de antes $")
    }
}

/*function que trae el dato del cliente y mira si es correcto para pasarlo a la funcion calc. */
function extraerDinero() {
    var saldoExtraer = prompt("Cuanto deseas extrar");

    if (saldoExtraer === "") {
        alert("No ingresaste ningun monto tu Saldo es " + "$" + saldoCuenta);
    } else if (saldoExtraer) {
        calc(parseFloat(saldoExtraer), "-", "Extrajiste: ");
    }
}
/*function que trae el dato del cliente y mira si es correcto para pasarlo a la funcion calc. */

function depositarDinero() {
    var deposit = prompt("Cuanto deseas depositar");

    if (deposit === "") {
        deposit = 0;
        alert("No ingresaste ningun monto tu Saldo es " + "$" + saldoCuenta);
    } else if (deposit) {
        calc(parseFloat(deposit), "+", "Depositaste:");
    }
}
/*function que trae el dato del cliente y mira si si correcto, luego mira que tipo de servicio es y lo pasa a calc. */

function pagarServicio() {
    var pagarServicio = prompt("Ingresa el numero del servicio que queres pagar:" + "\n" + "1 - Agua" + "\n" + "2 - Luz" + "\n" + "3 - Internet" + "\n" + "4 - Telefono");

    if(pagarServicio === ""){
        alert("No ingresaste ningun servicio tu Saldo es " + "$" + saldoCuenta);
    }else {
    switch (pagarServicio) { 
        case "1":
            calc(400, "-", "Pagaste por el servicio de Agua:");
            break;

        case "2":
            calc(600, "-", "Pagaste por el servicio de Luz:");
            break;
        case "3":
            calc(800, "-", "Pagaste por el servicio de Intenet:");
            break;
        case "4":
            calc(950, "-", "Pagaste por el servicio de Telefono:");
            break;
    }
    }
}

/*function que trae el dato del cliente y mira si es correcto para pasarlo a la funcion calc. */
function transferirDinero() {
    var transferir = prompt("Cuanto deseas transferir");

    if (transferir === "") {
        transferir = 0;
        alert("No ingresaste ningun monto tu Saldo es " + "$" + saldoCuenta);

    } else if (transferir) {
        calc(parseFloat(transferir), "-", "Transferiste:");

    }

}

/* Calcula de acuerdo a tres inputs que vienen de las funciones del tipo de operacion a realizar */
function calc(value, symbol, typeOfMovement) {
    var oldValue = saldoCuenta;
    var newValue = value;
    var oldLimit = limiteExtraccion;

    if (symbol === "-") {
        var newBalance = oldValue - newValue;
        if (newBalance > 0) {
            saldoCuenta = newBalance;
            actualizarSaldoEnPantalla();
            alert(typeOfMovement + "$" + newValue + "\n" + "Saldo Anterior $" + oldValue + "\n" + "Saldo actual: $" + saldoCuenta);
        } else if (newBalance < 0) {
            alert("No tienes fondos Suficientes para hacer la operacion");
        }

    } else if (symbol === "+") {
        saldoCuenta = oldValue + newValue;
        actualizarSaldoEnPantalla();
        alert(typeOfMovement + " $" + newValue + "\n" + "Saldo Anterior $" + oldValue + "\n" + "Saldo actual: $" + saldoCuenta);

    }else if(symbol ==="lim"){
        limiteExtraccion = value;
        actualizarLimiteEnPantalla();
        alert(typeOfMovement + oldLimit + "\n" + "Limite Nuevo $ " + limiteExtraccion);
    }

}

/*Funcion que mira si las datos ingresados son los correcto y llama al objeto de camiloDominguez para agregar sus datos */
function iniciarSesion() {
    var user = prompt("Ingresa tu codigo para iniciar sesion");
    if (user !== "1234") {
        nombreUsuario = "";
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
        alert("Ingresaste un codigo erroneo, intenta de nuevo");
        setTimeout(function () {
            iniciarSesion();
        }, 400); 

    } else {
        alert("Bienvenido Camilo Dominguez!" + "\n" + "Ya puedes utilizar tu Home Banking");
        saldoCuenta = camiloDominguez.saldoCuenta;
        nombreUsuario = camiloDominguez.nombreUsuario;
        limiteExtraccion = camiloDominguez.limiteExtraccion;
        actualizarSaldoEnPantalla();
        cargarNombreEnPantalla();
        actualizarLimiteEnPantalla();
    }
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}


/*add event listener to all buttons*/

var count = document.getElementsByClassName("links").length;

for (i = 0; i < count; i++) {
    document.getElementsByClassName("links")[i].addEventListener("click", function () {

        switch (this.getAttribute("id")) {
            case "extraerDinero":
                extraerDinero();
                break;

            case "depositarDinero":
                depositarDinero();
                break;

            case "pagarServicio":
                pagarServicio();
                break;

            case "transferirDinero":
                transferirDinero();
                break;

            case "cambiarLimite":
                cambiarLimiteDeExtraccion();
                break;
        }

    });
}

