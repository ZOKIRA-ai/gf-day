/* =====================================
        MUSEUM PAGE
        museum.js
===================================== */



/* =====================================
        SCROLL REVEAL
===================================== */

const frames =
document.querySelectorAll(".frame");

const observer =
new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

frames.forEach(frame=>{

observer.observe(frame);

});





/* =====================================
        LIGHTBOX
===================================== */

const lightbox =
document.getElementById("lightbox");

const previewImage =
document.getElementById("previewImage");

const closePreview =
document.getElementById("closePreview");



frames.forEach(frame=>{

frame.addEventListener("click",()=>{

const img =
frame.querySelector("img");

previewImage.src =
img.src;

lightbox.classList.add("show");

});

});



closePreview.addEventListener("click",()=>{

lightbox.classList.remove("show");

});



lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.classList.remove("show");

}

});





/* =====================================
        CONTINUE BUTTON
===================================== */

const continueBtn =
document.getElementById("continueBtn");

continueBtn.addEventListener("click",()=>{

document.body.style.opacity="0";

document.body.style.transition=".6s";

setTimeout(()=>{

window.location.href="games.html";

},600);

});