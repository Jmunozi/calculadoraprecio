console.log("Hola visitante");
precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;


        const cantidadElement = document.querySelector('.cantidad');
        const precioInicialElement = document.querySelector('.precio-inicial');
        const valorTotalElement = document.querySelector('.valor-total');
        const sumarButton = document.getElementById('sumar');
        const restarButton = document.getElementById('restar');
        let precioBase = 400000;
        let cantidad = 0;


        function actualizarContenido() {
            cantidadElement.textContent = cantidad;
            valorTotalElement.textContent = precioBase * cantidad;
        }


        sumarButton.addEventListener('click', function() {
            cantidad++;
            actualizarContenido();
            console.log('Estoy sumando');
        });

        restarButton.addEventListener('click', function() {
            if (cantidad > 0) {
                cantidad--;
                actualizarContenido();
                console.log('Estoy restando');
            }
        });