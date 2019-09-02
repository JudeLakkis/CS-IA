// Pop Up
var tools = document.getElementById('tools');
var open = document.getElementById('logo');
var close = document.getElementsByClassName("close")[0];

// Opens toos page when the logo is clicked
open.onclick = function() { tools.style.display = 'block'; };

// Click the X to close the tools window
close.onclick = function() { tools.style.display = "none"; };

// Click outside the tools window to close it
window.onclick = function(event) {
	if (event.target == tools) { tools.style.display = 'none'; };
};

// --------------------------------------------------------------------------------
// Inspection Check Box

// This just checks if inspection has been turned on
var use_wca_inspection = false;

function isInspection_on() {
	
	var box = document.getElementById('inspection');

	// When true inspection is on
	if (box.checked == true) {
		use_wca_inspection = true;
		console.log('Inspection is on');
	} else {
		use_wca_inspection = false;
		console.log('Inspection is off');
	}
}

// --------------------------------------------------------------------------------
// Side Times

function isSideBar_on() {

	var box = document.getElementById('sidebar');
	var storage = document.getElementById('storage');

	// When true, sidebar is shown
	if (box.checked == true) {
		console.log('Sidebar is turned on');
		storage.style.display = 'block';
		return true
	} else {
		console.log('Sidebar is turned off');
		storage.style.display = 'none';
		return false
	}

}