'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
let time = document.querySelector("span");
let fire = document.getElementById("firing-button");
let rocket = document.getElementById("rocket");
let timer = 5;
let interval;
let minX=1;
let maxX=1250;
let minY=1;
let maxY=400;
let j=0;

let taille=["big","normal","tiny"]
/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/
function temps() {


    // Execution d'une fonction de mise à jour du compteur toutes les secondes. Cette fonction reçoit en paramètre la zone du DOM à mettre à jour
    interval = window.setInterval(updateTimer, 1000);

    fire.classList.add("disabled")

    function updateTimer() {

        time.innerText = --timer;
        
        switch(timer)
        {
            case 5:
                rocket.setAttribute("src","./images/rocket2.gif")
            break; 
            
            case 4:
               fire.removeEventListener("click",temps)
               
            break; 
            
            case 0:
                rocket.setAttribute("src","./images/rocket3.gif")
                clearInterval(interval)
                rocket.classList.add("tookoff")
            break; 

        }
    

    }

}



function getRandomwidth(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function getRandomheight(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
	return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function createStars(){
    
    
    for(let i=0 ; i<200;i++)
    {
    //créer un element HTML DIV
    let element = document.createElement("div");
   
    /*element.className ="maClasse"
    element.setAttribute("class","maClasse");
    element.classList.add("maClasse");
    */
    let largeur=getRandomwidth(minX,maxX)
    let hauteur=getRandomheight(minY,maxY)
    element.style.left=largeur+"px";
    element.style.top=hauteur+"px";
    
    //permet d'ajouter notre element dans le body
    document.body.appendChild(element);
    
    element.classList.add("star");
    
    
   
    switch(j)
        {
            case 0:
                 element.classList.add(taille[0]);
                j++
            break; 
            
            case 1:
               element.classList.add(taille[1]);
               j++
            break; 
            
            case 2:
                 element.classList.add(taille[2]);
                 j=0
                
            break; 

        }
    
    
    
}
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
time.innerHTML=timer;
fire.addEventListener("click",temps)
createStars()
