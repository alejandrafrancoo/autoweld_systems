// SCROLL SUAVE
function scrollToOrders(){

    document
    .getElementById("pedidos")
    .scrollIntoView({
        behavior:"smooth"
    });

}

// FORMULARIO
const form = document.getElementById("pedidoForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const pedido = {

        nombre:
        document.getElementById("nombre").value,

        empresa:
        document.getElementById("empresa").value,

        email:
        document.getElementById("email").value,

        mensaje:
        document.getElementById("mensaje").value

    };

    // GUARDAR EN LOCAL STORAGE
    localStorage.setItem(
        "pedido",
        JSON.stringify(pedido)
    );

    alert("Pedido enviado correctamente");

    form.reset();

});

// GRÁFICA
const ctx = document
.getElementById('myChart');

new Chart(ctx, {

    type: 'bar',

    data: {

        labels: [
            'Manual',
            'Automático'
        ],

        datasets: [{

            label: 'Tiempo por pieza',

            data: [1200, 75],

            borderWidth: 1

        }]
    },

    options: {

        responsive:true,

        scales: {

            y: {
                beginAtZero: true
            }

        }

    }

});