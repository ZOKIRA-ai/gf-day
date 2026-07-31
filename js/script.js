const button = document.getElementById("openGift");

const music = document.getElementById("bgMusic");

button.addEventListener("click", () => {

    music.play();

    document.body.style.transition = "2s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 2000);

});

/* ==========================================
   PAGE 2 - LETTER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // Fade in paragraphs one by one
    const elements = document.querySelectorAll(
        ".letter-card p, .story-heading, .choose-text, .every-time, .signature, .continue-btn"
    );

    elements.forEach((element, index) => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";

        setTimeout(() => {
            element.style.transition = "all 0.8s ease";
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 180);
    });

});

/* ==========================================
   PAGE 3 - 12 MONTHS
========================================== */

const monthCards = document.querySelectorAll(".month-card");

if (monthCards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show-month");

            }

        });

    }, {
        threshold: 0.2
    });

    monthCards.forEach((card) => {

        card.classList.add("hidden-month");

        observer.observe(card);

    });

}
/* ==========================================
   PAGE 4 - QUALITIES
========================================== */

const qualityCards = document.querySelectorAll(".quality-card");

if (qualityCards.length > 0) {

    const qualityObserver = new IntersectionObserver((entries)=>{

        entries.forEach((entry,index)=>{

            if(entry.isIntersecting){

                setTimeout(()=>{

                    entry.target.classList.add("show-quality");

                }, index * 120);

            }

        });

    },{
        threshold:0.15
    });


    qualityCards.forEach(card=>{

        card.classList.add("hidden-quality");

        qualityObserver.observe(card);

    });

}
