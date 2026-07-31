const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const notes = {

cat:{

title:"🐱 Cat",

text:`Certified khoonkhar billi.😭🐾

Khud hee aaky pyaar bhee karna...
aur 2 minute baad muhn ka naqsha bigar dena.

Princess treatment to bachpan se deserving hai madam.🌚🖤`

},

parrot:{

title:"🦜 Parrot",

text:`Jab comfort level mil jae Maggu ko...

to iskee chatpati chattar pattar
tote ko bhee maat de jae boss.😭🦜🎀`

},

cloud:{

title:"☁️ Cloud",

text:`Ye mausam kee barish...🌧️

Ye barish ka paani...💧

Ye paani ke boonden...

Mujhy teri ankhon mn le duben.

OYE HOYEEE!😭🤍`

},

rose:{

title:"🌹 Rose",

text:`Gulab jaisi ho...🌹

Gulab lagti ho...

Halka sa muskura do
to lajawab lagti ho.🥹🖤`

},

chocolate:{

title:"🍫 Chocolate",

text:`Tension not...

insy zyada meethi
to tu hai chikni.😋🖤`

},

biryani:{

title:"🍛 Biryani",

text:`Biryani kee plate...🍛

Aur usme leg piece aa jae
to mauhtarma par

Jahaz ka qatal bhee
maaf ho jata hai.🤦🏻‍♂️😂`

},

ribbon:{

title:"🎀 Ribbon",

text:`Outside se dikhti hai
suwami type kee...🎀

Andar se hai bari
harami type kee.🌚😭🖤`

},

heart:{

title:"🤍 Tiny Heart",

text:`Tu teri soch se bhee
zyada haseen hai
meri jawn.🥹🤍`

},

pillow:{

title:"😴 Pillow",

text:`Jald hee bistar mn

us takiye ki jagah
asli wala Jahaz hoga...

Sabrunnn meri
neenupaglu.😭🛏️🤍`

},

sparkle:{

title:"✨ Sparkle",

text:`Ek talent aur...

choti si baat ko
itna overthink kar lena
ke Sherlock Holmes
bhee fail hai.😭✨🖤`

}

};

function openNote(note){

popupTitle.textContent = notes[note].title;

popupText.textContent = notes[note].text;

popup.style.display = "flex";

document.body.style.overflow = "hidden";

}

function closeNote(){

popup.style.display = "none";

document.body.style.overflow = "auto";

}

window.onclick = function(event){

if(event.target === popup){

closeNote();

}

};

document.addEventListener("keydown",function(event){

if(event.key === "Escape"){

closeNote();

}

});