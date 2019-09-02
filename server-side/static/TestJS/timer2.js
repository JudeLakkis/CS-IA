// Still trying to get this to work

var startTime = Date.now();

var label = document.getElementById('time')


for (i=0; i<100; i++) {
	console.log(startTime - Date.now());
}
