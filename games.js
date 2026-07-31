/*=========================================
        TODAY'S SAFA
        UPDATED WHEEL JS
        PART 1
=========================================*/


/*=========================================
            ELEMENTS
=========================================*/

const wheel = document.getElementById("wheel");

const spinBtn = document.getElementById("spinBtn");

const resultOverlay = document.getElementById("resultOverlay");

const loadingState = document.getElementById("loadingState");

const resultState = document.getElementById("resultState");

const resultEmoji = document.getElementById("resultEmoji");

const resultTitle = document.getElementById("resultTitle");

const resultMessage = document.getElementById("resultMessage");

const spinAgainBtn = document.getElementById("spinAgainBtn");

const backBtn = document.getElementById("backBtn");

const continueBtn = document.getElementById("continueBtn");


/*=========================================
            VARIABLES
=========================================*/

let currentRotation = 0;

let spinning = false;



/*=========================================
            SAFA RESULTS
=========================================*/

const safas = [

{
emoji:"🌸",
title:"Peaceful Safa",
message:
`You have this strange ability to make everything feel calmer.

I hope life always gives that same peace back to you.

Never lose that softness.

🌸🤍`
},


{
emoji:"🥹",
title:"Shy Safa",
message:
`You don't need to become louder to be noticed.

The right people always notice the little things.

And honestly...

they're usually the prettiest ones.

🤍`
},


{
emoji:"✨",
title:"Dreamer Safa",
message:
`Never stop dreaming.

One day you'll realise the girl who imagined beautiful things...

became one of them.

✨`
},


{
emoji:"😭",
title:"Emotional Safa",
message:
`Feeling deeply is not a weakness.

It means your heart still cares
in a world that needs more kindness. 🤍`
},


{
emoji:"🌙",
title:"Quiet Safa",
message:
`Some people think quiet people don't have much to say.

I think they simply speak with their eyes instead of their voice.

Stay exactly like that.

The world has enough noise already.

🤍`
},


{
emoji:"🌷",
title:"Soft Safa",
message:
`Your kindness is something rare.

Protect that gentle heart
because it is one of your strengths. 🌷`
},


{
emoji:"🦋",
title:"Chaotic Safa",
message:
`Never become ordinary
just to fit in.

Your little chaos is part
of what makes you unforgettable. 🦋`
},


{
emoji:"🤍",
title:"Meri Safa",
message:
`Out of every version of you...

this one will always be special.

Not because you're perfect.

Because you're YOU. 🤍`
}

];
/*=========================================
            SPIN SYSTEM
=========================================*/


spinBtn.addEventListener("click",()=>{


    if(spinning) return;


    spinning = true;


    spinBtn.disabled = true;


    spinBtn.innerHTML =
    "Spinning... ✨";



    // Choose random Safa

    const selectedIndex = Math.floor(
        Math.random() * safas.length
    );



    const sliceAngle = 45;


    const finalAngle =
    (selectedIndex * sliceAngle) + 22.5;



    const extraSpins =
    360 * (5 + Math.floor(Math.random()*3));



    currentRotation +=
    extraSpins + (360 - finalAngle);



    wheel.style.transform =
    `rotate(${currentRotation}deg)`;





    /*
        AFTER WHEEL STOPS
    */

    setTimeout(()=>{


        resultOverlay.classList.remove("hidden");


        loadingState.classList.remove("hidden");


        resultState.classList.add("hidden");



        showFindingText();



    },5200);





    /*
        SHOW RESULT
    */

    setTimeout(()=>{


        loadingState.classList.add("hidden");


        resultState.classList.remove("hidden");



        resultEmoji.innerHTML =
        safas[selectedIndex].emoji;



        resultTitle.innerHTML =
        safas[selectedIndex].title;



        typeMessage(
            safas[selectedIndex].message
        );



    },7000);



});



/*=========================================
        FINDING ANIMATION
=========================================*/


function showFindingText(){


const messages=[

"Finding today's Safa... 🌸",

"Reading the little things... 🤍",

"Looking for your version... ✨",

"Found it 🥹"

];


let i=0;


loadingState.querySelector("p").innerHTML =
messages[0];


const interval=setInterval(()=>{


i++;


if(i < messages.length){


loadingState.querySelector("p").innerHTML =
messages[i];


}


else{


clearInterval(interval);


}


},900);


}
/*=========================================
            TYPEWRITER MESSAGE
=========================================*/


function typeMessage(text){


    resultMessage.innerHTML = "";


    let index = 0;


    const speed = 25;



    const typing = setInterval(()=>{


        resultMessage.innerHTML += text[index];


        index++;



        if(index >= text.length){


            clearInterval(typing);


        }


    },speed);


}




/*=========================================
            SPIN AGAIN
=========================================*/


spinAgainBtn.addEventListener("click",()=>{


    resultOverlay.classList.add("hidden");



    loadingState.classList.remove("hidden");


    resultState.classList.add("hidden");



    resultMessage.innerHTML = "";



    spinBtn.disabled = false;


    spinBtn.innerHTML =
    "✨ Spin The Wheel";



    spinning = false;



});




/*=========================================
            BACK BUTTON
=========================================*/


backBtn.addEventListener("click",()=>{

    resultOverlay.classList.add("hidden");

    loadingState.classList.remove("hidden");

    resultState.classList.add("hidden");

    resultMessage.innerHTML = "";

    spinBtn.disabled = false;

    spinBtn.innerHTML = "✨ Spin The Wheel";

    spinning = false;

});




/*=========================================
            ESCAPE CLOSE
=========================================*/


document.addEventListener("keydown",(e)=>{


    if(e.key === "Escape"){


        resultOverlay.classList.add("hidden");


    }


});




/*=========================================
            BUTTON PRESS EFFECT
=========================================*/


document.querySelectorAll("button")

.forEach(button=>{


    button.addEventListener("click",()=>{


        button.style.transform =
        "scale(.96)";



        setTimeout(()=>{


            button.style.transform =
            "";


        },120);



    });


});




/*=========================================
            PAGE LOAD
=========================================*/


window.addEventListener("load",()=>{


    document.body.classList.add(
        "loaded"
    );


});

continueBtn.addEventListener("click",()=>{

window.location.href = "bouquet.html";

});
