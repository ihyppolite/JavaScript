'use strict';
// On défini le propriété de notre carré que l'on va dessiner dans un objet
let square = {
    color: "#FF0000",
    length: 20,
    x: 10,
    y: 10
};

// Notre context et notre Canvas sont définis dans le Scope global pour un accès par nos fonctions
let canvasDom;
let ctx;



// Dès que le DOM est chargé on commence
document.addEventListener('DOMContentLoaded', function() {

    let canvasDom = document.querySelector("#canvas");

    let ctx = canvasDom.getContext('2d');

    ctx.strokeRect(square.x, square.y, square.length, square.length);
    ctx.strokeStyle = square.color;

    function rafraichir() {
        ctx.clearRect(0, 0, canvasDom.width, canvasDom.height);
        ctx.strokeRect(square.x, square.y, square.length, square.length);

    }

    function onKeyDown(event) {



        switch (event.key) {
            case 'ArrowUp':
                console.log("haut")
                square.y -= 10
                if (square.y <= 0) {
                    square.y = 0;
                }
                rafraichir()

                break;

            case 'ArrowDown':
                console.log("bas")
                square.y += 10
                if (square.y >= canvasDom.height - square.length) {
                    square.y = canvasDom.height - square.length;
                }
                rafraichir()
                break;

            case 'ArrowLeft':
                console.log("gauche")
                square.x -= 10
                if (square.x <= 0) {
                    square.x = 0;
                }
                rafraichir()
                break;

            case 'ArrowRight':
                console.log("droite")
                square.x += 10
                if (square.x >= canvasDom.width - square.length) {
                    square.x = canvasDom.width - square.length;
                }
                rafraichir()
                break;

            default:
                console.log("erreur")
        }


    }


    document.addEventListener("keydown", onKeyDown);
});