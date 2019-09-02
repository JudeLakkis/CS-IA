// Moves Dictionary
var moves = {};
moves['L'] = ["L", "L'", "L2"]; moves['R'] = ["R", "R'", "R2"];
moves['U'] = ["U", "U'", "U2"]; moves['D'] = ["D", "D'", "D2"];
moves['F'] = ["F", "F'", "F2"]; moves['B'] = ["B", "B'", "B2"];

// --------------------------------------------------------------------------------
// Opposite Key Dictionary

var opposites = {};
opposites['L'] = 'R'; opposites['R'] = 'L';
opposites['U'] = 'D'; opposites['D'] = 'U';
opposites['F'] = 'B'; opposites['B'] = 'F';

// --------------------------------------------------------------------------------
// Randint Function

// Returns random value between 0 and the [range] var
function randint(range) {return Math.floor(Math.random() * Math.floor(range))};

// --------------------------------------------------------------------------------
// Generator Function

function generator(moves, opposites) {
	var keys = ['L','R','U','D','F','B'];
	var scramble_seed = [];

	for (i = 0; i < 24; i++) {
		var gen = keys[randint(keys.length)];
		if (scramble_seed.length == 0) {scramble_seed.push(gen);};

		if (scramble_seed.length > 0) {
			var previous = scramble_seed[scramble_seed.length - 1];
			if (gen != previous && gen != opposites[previous]) {scramble_seed.push(gen)}
			else {
				for (j=0;j<10;j++) {
					new_gen = keys[randint(keys.length)];
					if (new_gen != previous && new_gen != opposites[previous]) {scramble_seed.push(new_gen);break;};
				};
			};
		}; 

	}; // End of for loop check
	return scramble_seed.map(i => moves[i][randint(moves[i].length)]);
};

// --------------------------------------------------------------------------------
// Viewable Scramble

function scramble_out(comp_scramble) {
	var viewable = '';
	for (var move in comp_scramble) {viewable += comp_scramble[move] + ' '};
	return viewable
};

// --------------------------------------------------------------------------------
// Main

var view_scramble = document.getElementById('view_scramble');
view_scramble.innerHTML = scramble_out(generator(moves, opposites));