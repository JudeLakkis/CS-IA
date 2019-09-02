sessionTimes = [1,2,3,4,5,6,7,8,9,10]; xpoints = [1,2,3,4,5,6,7,8,9,10]

function cubePlot() {
	// for (i = 0; i <= sessionTimes.length; i++) { xpoints.push(i + 1) };
	var william = document.getElementById('plottingBox');

	Plotly.plot( william,
	[{ x: xpoints, y: sessionTimes }], 
	{margin: { t: 0 } } );
}

cubePlot()