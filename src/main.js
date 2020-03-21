const $botonEmpezar = document.querySelector('#empezar');
const $cuadrosMemo = document.querySelectorAll('.col-md-4');
const $tablero = document.querySelector('.tablero');



let cartasJuego = [1, 1, 2, 2, 3, 3];





let seleccion = [];


$botonEmpezar.onclick = function() {

    let cartasMezcladas = randomizar(cartasJuego);

    // aca mi intencion es hacer un forEach y trabajar con la propiedad 'name'
    // de html pero mientras lo hago asi para dejar la parte logica andando
    document.querySelector('#cuadro-1').innerHTML = cartasMezcladas[0];
    document.querySelector('#cuadro-2').innerHTML = cartasMezcladas[1];
    document.querySelector('#cuadro-3').innerHTML = cartasMezcladas[2];
    document.querySelector('#cuadro-4').innerHTML = cartasMezcladas[3];
    document.querySelector('#cuadro-5').innerHTML = cartasMezcladas[4];
    document.querySelector('#cuadro-6').innerHTML = cartasMezcladas[5];

    seleccion = [];



    $tablero.style.display = "block";
    desbloquearInputUsuario();
}

function mezclarCartas() {
    for (i = $cuadrosMemo.children.length; i >= 0; i--) {
        $cuadrosMemo.appendChild(list.children[Math.random() * i | 0]);
    }
}

function desbloquearInputUsuario() {

    $cuadrosMemo.forEach(function($cuadro){

        $cuadro.onclick = manejarInputUsuario;
        }
    )
}

function bloquearInputUsuario() {
    $cuadrosMemo.forEach(function($cuadro){

        $cuadro.onclick = function () {

        }
        }
    )
}

function manejarInputUsuario(e) {

        desbloquearInputUsuario();
        const seleccionUsuario = e.target;
        seleccion.push(seleccionUsuario);
        resaltar(seleccionUsuario);


        if (seleccion.length === 2) {            
            bloquearInputUsuario(); 

            
            
            setTimeout(function() {
                seleccion = [];
            }, 1000)

            setTimeout(function() {
                manejarInputUsuario();
            }, 2000)
            
                       
        }

}

function resaltar(cuadro) {

    cuadro.style.backgroundColor = "red";

    if (seleccion.length === 2) { 
        
        if (seleccion[0].innerHTML != seleccion[1].innerHTML) {
            setTimeout(function() {
                seleccion[0].style.backgroundColor = "blue";
                seleccion[1].style.backgroundColor = "blue";
            }, 1000) 
    }
        

        if (seleccion[0].innerHTML === seleccion[1].innerHTML) {

            

            seleccion[0].style.backgroundColor = "white";
            seleccion[1].style.backgroundColor = "white";
            seleccion[0].style.color = "white";
            seleccion[1].style.color = "white";
    }
    }  
        
    


    }


function randomizar(array) {

        for (let i = array.length - 1 ; i > 0; i--) {
            const j = Math.floor(Math.random() * i)
            const temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }

        console.log(array);
        return array;




}


