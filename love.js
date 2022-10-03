var Yname = document.getElementById(".your-name").value;
var Pname = document.getElementById(".partner-name").value;

function myScore(){
var lovescore = Math.random() * 100;
lovescore = Math.floor(lovescore) + 1;


    document.getElementById('lovevalue').value = lovescore + "%";

    if (lovescore > 70){
        document.querySelector("h3").innerHTML = "You both are made for eachother";
    }
        
    if (lovescore > 30 && lovescore <=70){
        document.querySelector("h3").innerHTML = "You love eachother Unconditionally";
    }
        
    if (lovescore <= 30){
        document.querySelector("h3").innerHTML = "Try to understand eachother";
    }
   // else{
       // document.querySelector("h3").innerHTML = "You are in a loving relationship with your partner";
    //}
};