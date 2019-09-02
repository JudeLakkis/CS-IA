var sessionTimes = []

/*
1min = 60000mils
*/

// Finds the values that don't get counted in a cubing average
function cancled(list, adjustment=0) {
	var largest = 0; var smallest = Math.pow(999, 999);

	for (i=0; i<list.length; i++) {
		var item = list[i + adjustment];
		if (item > largest) {largest = item};
		if (item < smallest) {smallest = item};
	}
	return [largest, smallest]
}


function AO5(times) {

	// Stops the function being called without at least 5 items in the list
	if (times.length < 5){return null};
	// Finds the starting point of the last 5 items
	if (times.length >= 5){var last5=times.length - 5}

	// Splitting the list into what needs to be averaged
	var largest = cancled(sessionTimes)[0]; var smallest = cancled(sessionTimes)[1];
	averageList = [];
	for (i=0;i<5;i++) {
		var item = times[last5 + i]	;
		if (item != largest && item != smallest) {averageList.push(item)};
	};

	// Finding the average
	var final = 0
	for (i=0;i<averageList.length;i++) {final += averageList[i]}
	return Math.floor(final/averageList.length)
}

// AO5(sessionTimes)

function AO12(times) {

	if (times.length < 12) {return null};
	if (times.length >=12) {var last12=times.length - 12};

	var largest = cancled(sessionTimes)[0]; var smallest = cancled(sessionTimes)[1];
	averageList = []
	for (i=0; i<12;i++) {
		var item = times[last12 + i];
		if (item != largest && item != smallest) {averageList.push(item)};
	};

	// Find the average
	var final = 0;
	for (i=0;i<averageList.length;i++) { final += averageList[i] };
	return Math.floor(final/averageList.length)

}


function convert(average) {
	var min = Math.floor(average/100/60);
	var sec = Math.floor(average/100);
	var msec = average % 100;

	if (min == 0) { return final = sec + "." + msec; }
	else {return final = min + ":" + sec + "." + msec;}

}


function display(average5, average12) {
	var ao5 = document.getElementById('ao5');
	var ao12 = document.getElementById('ao12');

	// Stop weird display in the average
	if (sessionTimes.length < 5) {ao5.innerHTML = 'AO5: --'};
	if (sessionTimes.length < 12) {ao12.innerHTML = 'AO12: --'}

	// Display average correctly
	if (sessionTimes.length >= 5) { ao5.innerHTML = 'AO5: ' + average5 };
	if (sessionTimes.length >= 12) { ao12.innerHTML = 'AO12: ' + average12 };
}

// Called once at the begining to ensure that there is text in the box
display(convert(AO5(sessionTimes)), convert(AO12(sessionTimes)))

// --------------------------------------------------------------------------------
// Current Average Popups

function showTimes5() {
	console.log('AO5 WAS PRESSED');
}

function showTimes12() {
	console.log('AO12 WAS PRESSED');
}

// --------------------------------------------------------------------------------
// Time Display on the Side

function addTime() {
	// var timerLabel = document.getElementById('timerLabel');
	// Find the table
	var tabel = document.getElementById('time_data');
	// Insert a row under the header
	var row = tabel.insertRow(sessionTimes.length);

	// Cells
	var numberCell = row.insertCell(0);
	var timeCell = row.insertCell(1);
	var ao5Cell = row.insertCell(2);
	var ao12Cell = row.insertCell(3);

	// Cell Content
	numberCell.innerHTML = String(sessionTimes.length);
	timeCell.innerHTML = convert(sessionTimes[sessionTimes.length - 1]);
	// Average Boxes
	if (sessionTimes.length < 5) {ao5Cell.innerHTML = '--';}
	else {ao5Cell.innerHTML = convert(AO5(sessionTimes))};
	
	if (sessionTimes.length < 12) {ao12Cell.innerHTML = '--';}
	else {ao12Cell.innerHTML = convert(AO12(sessionTimes))};

};

// --------------------------------------------------------------------------------
// Plotting the Times in the lower right hand corner

function plotTimes() {
	console.log('Plotting Times...');
}