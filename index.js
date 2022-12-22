//for generating random dices
let randomNumber1= Math.floor(1+Math.random()*6)
let randomNumber2= Math.floor(1+Math.random()*6)
let str1= "images/dice"+randomNumber1+".png"
let str2= "images/dice"+randomNumber2+".png"
document.querySelector(".img1").setAttribute("src",str1)
document.querySelector(".img2").setAttribute("src",str2)

//for displaying winner message 
if(randomNumber1>randomNumber2) document.querySelector("h1").textContent="🎌 Player 1 Wins"
else if(randomNumber1<randomNumber2) document.querySelector("h1").textContent="Player 2 Wins 🎌"
else document.querySelector("h1").textContent="🎌 It's a Tiee! 🎌"