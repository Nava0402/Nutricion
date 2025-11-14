function calcular() {
    var total = 0;

    if (document.getElementById("primeraConsulta").checked) {
        total = total + 850
    } else if (document.getElementById("seguimiento").checked) {
        total = total + 700
    } else if (document.getElementById("paqueteTres").checked) {
        total = total + 2000
    } else if (document.getElementById("paquetePareja").checked) {
        total = total + 5000
    }

    if (document.getElementById("recetas").checked) {
        total = total + 1000
    }
    if (document.getElementById("ejercicios").checked) {
        total = total + 1000
    }
    if (document.getElementById("revistaSemanal").checked) {
        total = total + 150
    }

    analisis = document.getElementById("analisis").value;
    total = total + analisis * 1;

    porcentaje = document.getElementById("formaPago").value;
    total = total + (total * porcentaje * 1);

    factura = document.getElementById("FAC").value;
    if (factura == "si") {
        total = total + (total * 0.16);
    }

    document.getElementById("total").innerHTML = "Gracias por tu interes";

    alert("El total es de: $" + total);
}