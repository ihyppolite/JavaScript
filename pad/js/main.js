// *************************************************************************
// **************************** Functions **********************************
// *************************************************************************
function playaudio(pad){
     //récupérer la valeur du data-sound
       const sound = pad.dataset.sound;
       
       //cibler le mp3 (donc la balise audio, avec une concaténation de la chaine 'sound' + le data-sound)
       const mp3 = document.getElementById("sound" + sound);
       
       //ajouter la class active sur l'element déclencheur
       pad.classList.add('active');
       
       //remise à zéro de la position de lecture
        mp3.currentTime = 0;
       
       //utiliser la méthode play() qui fait partie de l'api audio natif de javascript
       mp3.play();
       
       //retirer la class .active à 800ms
        window.setTimeout(function(){
           pad.classList.remove('active'); 
        }, 800);
}


// *************************************************************************
// ********************************* Code principal ************************
// *************************************************************************
document.addEventListener('DOMContentLoaded', function() {
   console.log('ready') ;
   
   //cibler tous les a (utiliser une seule commande)
   const pads = document.querySelectorAll(".container a");
   
   
   //rajouter un ecouteur de type click sur chaque cible
   pads.forEach(function(item) {
       item.addEventListener('click', function(e) {
           //stopper l'event
           e.preventDefault();
           
           playaudio(this);
           

       });
       
       //déclencher des sons à partir du clavier du pc
     /*
     1 - écouter le clavier, le type sera 'keydown'
     */
     document.addEventListener("keydown", function(e) {
         //2 - mettre un écouteur sur le clavier, dans un premier temps d'avoir un callback qui vous renvoie le code 
            //voir : http://keycode.info/
            
            //le code de la touche du clavier est dans event.keyCode
     
            //chaine de caractère qui va construire le nom de l'id du pad
            const padItemId = "keycode" + e.keyCode;
            
            //si l'id existe on peut déclencher le son
            if (document.getElementById(padItemId) != null) {
                playaudio(document.getElementById(padItemId));
            }
     });
   });

    
});