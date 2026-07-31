// ==============================
// MUSEUM OF US
// ==============================

// Reveal exhibits on scroll

const exhibits = document.querySelectorAll(".exhibit");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{

threshold:0.15

});

exhibits.forEach(exhibit=>{

observer.observe(exhibit);

});

// ==================================
// Exhibit Hover Glow
// ==================================

exhibits.forEach(exhibit=>{

exhibit.addEventListener("mouseenter",()=>{

exhibit.style.transition="0.4s";

});

});

// ==================================
// Museum Loaded
// ==================================

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});