function saveTimes() {
	console.log('Saving Times...');
	var times = JSON.stringify(sessionTimes);
	localStorage.setItem('times', times)
}

// --------------------------------------------------------- \\
// TODO: After load timer no longer stores times in side bar
// --------------------------------------------------------- \\

function loadTimes() {
	sessionTimes = JSON.parse(localStorage.getItem('times'))
	console.log(sessionTimes);
	fill()
	console.log('Times Loaded');
}

function clearTimes() {
	localStorage.clear()
}

// ------------------------------------------------------------ \\
// TODO: Fill Function Crashes whole site when loading averages
// ------------------------------------------------------------ \\

function fill() {
	var tabel = document.getElementById('time_data');
	for (i = 0; i < sessionTimes.length; i++) {
		// Creation
		var row = tabel.insertRow(i + 1);

		var numberCell = row.insertCell(0);
		var timeCell = row.insertCell(1);
		var ao5Cell = row.insertCell(2);
		var ao12Cell = row.insertCell(3);

		// Content
		numberCell.innerHTML = String(i + 1);
		timeCell.innerHTML = convert(sessionTimes[i])

		if (i + 1 < 5) {ao5Cell.innerHTML = '--';}
		else {ao5Cell.innerHTML = 'avg'}//convert(AO5(sessionTimes))};
	
		if (i + 1 < 12) {ao12Cell.innerHTML = '--';}
		else {ao12Cell.innerHTML = 'avg'}//convert(AO12(sessionTimes))};

	};
};