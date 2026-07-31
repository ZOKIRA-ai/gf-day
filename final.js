/* =====================================
        FINAL JS
        VINTAGE LETTER
        PART 1
===================================== */


const openBtn = document.getElementById("openLetter");

const envelope = document.querySelector(".envelope");

const envelopeSection =
document.getElementById("envelopeSection");

const letterSection =
document.getElementById("letterSection");



openBtn.addEventListener("click",()=>{


    // Open envelope animation

    envelope.classList.add("open");



    // Hide envelope after animation

    setTimeout(()=>{


        envelopeSection.classList.add("hidden");


        letterSection.classList.remove("hidden");


        revealLetter();


    },1500);



});





function revealLetter(){


const paragraphs =
document.querySelectorAll("#letterText p");


paragraphs.forEach((para,index)=>{


    para.style.animationDelay =
    `${index * 1.2}s`;


});


}
/* =====================================
        FINAL JS
        VINTAGE LETTER
        PART 2
===================================== */



function startFinalMoment(){


const signature =
document.querySelector(".signature");



setTimeout(()=>{


signature.style.opacity="1";

signature.style.animation=
"lineReveal 2s ease forwards";


},18000);



}






/* =====================================
        INITIAL SETUP
===================================== */


window.addEventListener("load",()=>{


const signature =
document.querySelector(".signature");

if(signature){

signature.style.opacity="0";

}


});





/*
Start final moment after
letter begins appearing
*/


setTimeout(()=>{

startFinalMoment();

},2000);