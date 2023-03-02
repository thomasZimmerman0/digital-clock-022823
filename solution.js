let clock = document.getElementById('clock');

function currentTime() {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();

    hours = (hours < 10 ? '0'  : "") + hours;
    minutes = (minutes < 10 ? '0'  : "") + minutes;
    seconds = (seconds  < 10 ? '0'  : "") + seconds;
    if(milliseconds <  10){
        milliseconds = '00' + milliseconds
    } else {
        milliseconds = (milliseconds < 100 ? '0' : '' ) + milliseconds
    }

    clock.innerHTML =  hours + ':' + minutes + ':' + seconds+ ':' + milliseconds

}

setInterval(currentTime, 1)





