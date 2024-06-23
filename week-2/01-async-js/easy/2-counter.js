// <!-- ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck. -->

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("Number");
    let count = 0;
    let timeoutId = null;

    function updateCounter(){
        count++;
        button.textContent = count;
        timeoutId = setTimeout(updateCounter, 1000);
    }

    button.addEventListener("click", function(){
        if(timeoutId){
            clearTimeout(timeoutId);
            timeoutId = null;
        }
        else{
            updateCounter();
        }
    });
})






































































// (Hint: setTimeout)