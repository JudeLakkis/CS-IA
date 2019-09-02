var running = false;
var time = 0;
var final = '';

var startBtn = document.getElementById("startBtn");
var timerLabel = document.getElementById('timerLabel');

// --------------------------------------------------------------------------------

function start(){

    running = true;
    // Can't press start again
    startBtn.disabled = true;
    timer();
}

// --------------------------------------------------------------------------------

function stop(){

    running = false;
    // Once timer has stopped the button becomes clickable again
    startBtn.disabled = false;
}

// --------------------------------------------------------------------------------

function reset(){

    running = false;
    time = 0;
    // Writes over the most recent time
    timerLabel.innerHTML = '0:00.00';
    // Once timer has stopped the button becomes clickable again
    startBtn.disabled = false;
    console.log(final);
}

// --------------------------------------------------------------------------------

function inspection() {
    var inspection_time = 15;
    setInterval(countdown, 1000);

    // Call on 8,12 seconds

    function countdown() {
        inspection_time--;
        if (inspection_time >= 0) {
            document.getElementById('timerLabel').innerHTML = inspection_time;
        } else {
            document.getElementById('timerLabel').innerHTML = 'finished';
        }
    }
    // This will return the penilty
    return null
}

// --------------------------------------------------------------------------------

// ----------------------------------------------------------------------- \\
// TODO: Timer is a little messed up, the speed is a little weird at times
// ----------------------------------------------------------------------- \\

function timer(){

    if (running == true) {
        setTimeout(function() {
        	// Everything is calculated in msecs
            time++;
            var min = Math.floor(time/100/60);
            var sec = Math.floor(time/100);
            var msec = time % 100;

            if (min <= 0) min = min;
            if (min < 10 && min > 0) min = "0" + min;
            if (sec >= 60) sec = sec % 60;
            if (sec < 10) sec = "0" + sec;
            if (msec < 10) msec = "0" + msec;

            timerLabel.innerHTML = min + ":" + sec + "." + msec;
            final = min + ":" + sec + "." + msec;

            timer();
        }, 9); // The number of msecs per action, in this case 9msecs/action
    }
}