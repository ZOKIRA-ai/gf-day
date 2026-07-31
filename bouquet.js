/* =====================================
        BOUQUET PAGE
        JS PART 1
===================================== */



/* =====================================
        ELEMENTS
===================================== */


const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
const line4 = document.getElementById("line4");
const line5 = document.getElementById("line5");

const receiveBouquetBtn =
document.getElementById("receiveBouquetBtn");

const introSection =
document.getElementById("introSection");

const bouquetSection =
document.getElementById("bouquetSection");

const bouquetImage =
document.querySelector(".bouquet-image");

const bouquetMessage =
document.getElementById("bouquetMessage");

const lastHeartBtn =
document.getElementById("lastHeartBtn");





/* =====================================
        INTRO SEQUENCE
===================================== */


setTimeout(()=>{

line2.classList.remove("hidden");

},2500);



setTimeout(()=>{

line3.classList.remove("hidden");

},5000);



setTimeout(()=>{

line4.classList.remove("hidden");

},7500);



setTimeout(()=>{

line5.classList.remove("hidden");

},10000);



setTimeout(()=>{

receiveBouquetBtn.classList.remove("hidden");

},13000);





/* =====================================
        START BOUQUET
===================================== */


receiveBouquetBtn.addEventListener("click",()=>{

introSection.classList.add("hidden");

bouquetSection.classList.remove("hidden");

startBouquet();

});
/* =====================================
        START BOUQUET
===================================== */

function startBouquet(){

    // Bouquet
    setTimeout(() => {
        bouquetImage.classList.add("show");
    }, 800);


    // Wait before message
    setTimeout(() => {
        bouquetMessage.classList.remove("hidden");
        bouquetMessage.classList.add("show");
    }, 3500);


    // Let her read...
    setTimeout(() => {
        lastHeartBtn.classList.remove("hidden");
        lastHeartBtn.classList.add("show");
    }, 8500);

}





/* =====================================
        GO TO FINAL LETTER
===================================== */

lastHeartBtn.addEventListener("click",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        window.location.href="final.html";

    },600);

});