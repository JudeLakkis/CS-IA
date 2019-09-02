// This JS file deas with document control

// --------------------------------------------------------------------------------
// When the key is lifted

onkeyup = function(event) { 
    if (event) {
    	// Starting the timer using spacebar
        if (event.keyCode == 32 || event.which == 32) {
            if(running == true) {
                stop();
                // The plus 1 is because it drops one milsec at this point for some reason
                sessionTimes.push(time + 1)
                // Update Averages
                display(convert(AO5(sessionTimes)), convert(AO12(sessionTimes)));
                // Push time to storage stack
                addTime();
                cubePlot();
                view_scramble.innerHTML = scramble_out(generator(moves, opposites));
            } 
            else if (running == false) {
                reset();
                // Inspection function will go here
                timerLabel.style.color = "#EDF2F4"; // Original white
                start();
            }
        }

        // Clearing the timer using 'C'
        if (event.keyCode == 67 || event.which == 67) {
        	if (running == false) {
        		reset();
        	}
        	else if (running == true) {
        		stop();
        	}
        }

    }
};

// --------------------------------------------------------------------------------
// When the key is pressed down

onkeydown = function(event) {
    if (event) {

        // Chaning the timer label when space is held down
        if (event.keyCode == 32 || event.which == 32) {
            if (running == false) {
                timerLabel.style.color = "#80FF42"; // Get ready green
                timerLabel.innerHTML = 'Ready?';
            }
        }

        // Creating the next scramble with right arrow
        if (event.keyCode == 39 || event.which == 39) {
            previous_scramble = view_scramble.innerHTML;
            console.log(previous_scramble);
            view_scramble.innerHTML = scramble_out(generator(moves, opposites));
        }

        // Call the Previous Scramble with left arrow
        if (event.keyCode == 37 || event.which == 37) {
            view_scramble.innerHTML = previous_scramble;
        }
    }
}