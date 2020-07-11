var minutes = 0;
var second = 0;
var mili = 0 ;
var interval;
var minHeading = document.getElementById("minutes");
var secHeading = document.getElementById("second");
var miliHeading = document.getElementById("mili");

function timer(){
    mili++
    miliHeading.innerHTML = mili;
    if(mili >= 100){
        second++
        secHeading.innerHTML = second;
        mili = 0
    }
    else if (second >= 60){
        minutes++
        minHeading.innerHTML = minutes;
        second = 0;
    }
}
function Start(){
    interval = setInterval(timer , 10);
    document.getElementById("Start").disabled = true;
    document.getElementById("Pause").disabled = false;
}
function Pause(){
    clearInterval(interval);
    document.getElementById("Start").disabled = false;
    document.getElementById("Pause").disabled = true;
}
function Restart(){
    minutes = 0;
    second = 0;
    mili = 0;
    minHeading.innerHTML = minutes;
    secHeading.innerHTML = second;
    miliHeading.innerHTML = mili;
    document.getElementById("Start").disabled = false;
    document.getElementById("Pause").disabled = false;
    clearInterval(interval);
}

