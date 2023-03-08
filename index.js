setInterval(showTime,1000);
function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let suffix="AM";

    if(hours>12){
        hours-=12;
        suffix="PM";

    }
    else if (hours==0){
        hours=12;
        suffix="AM";
    }

    hours=(hours<10)? "0"+hours :hours;
    minutes=(minutes<10)?"0"+minutes:minutes;
    seconds=(seconds<10)?"0"+seconds:seconds;

    let currentime= hours+":"+minutes+":"+seconds+" "+suffix;
    document.getElementById("clock").textContent=currentime;
}
showTime();