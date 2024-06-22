// <!-- ## Create a counter in JavaScript

// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
// It should go up as time goes by in intervals of 1 second -->

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("Number");
    let counter = 0;
    let intervalId = null;

    button.addEventListener("click", function(){
        if(intervalId){
            clearInterval(intervalId);
            intervalId = null;
            counter = 0;
        }else{
            intervalId = setInterval(function(){
                counter++;
                button.textContent = counter;
            }, 1000);
        }   
    });
});