// initialisign all the elements in js
const description = document.querySelector(".howtoplay");
const startbtn = document.querySelector("#startbtn1");
const gamecontents = document.querySelector(".gamecontents")
// giving eventlistener to the start button
startbtn.addEventListener("click",function(){
    gamecontents.style.display='inherit'
    description.style.display='none';
    startbtn.style.display='none';
});