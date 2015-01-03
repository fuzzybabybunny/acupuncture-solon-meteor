Template.SVGTest.rendered = function(){

	$('#arm').load(function(){
		var panZoomArm = svgPanZoom('#arm');
	});

	var arm = document.getElementById("arm");
	arm.addEventListener('load', function(){
		var panZoomArm = svgPanZoom('#arm');
	});

	var map = document.getElementById("map");
	arm.addEventListener('load', function(){
		var panZoomArm = svgPanZoom('#map');
	});

	var  markerPositions = [[225,175], [75,75], [150,225], [400,125], [300,300]];

	var svgNS = "http://www.w3.org/2000/svg";
	var xlinkNS = "http://www.w3.org/1999/xlink";

	var alertClicked = function(event){
		var dataDescription = event.currentTarget.attributes[1].textContent;
		alert('clicked on ' + dataDescription);
	};

	for (var i=0; i<markerPositions.length; i++) {
	    // Create an SVG <use> element
	    var  use = document.createElementNS(svgNS, "use");
	    // use it at our pin marker (the circle)
	    use.setAttributeNS(xlinkNS, "href", "#pin");
	    // Set pin's data attribute
	    use.setAttribute("data-description", "Pin " + i );
	    // Set it's x and y
	    use.setAttribute("x", markerPositions[i][0]);
	    use.setAttribute("y", markerPositions[i][1]);
	    use.addEventListener('touchstart', alertClicked, false);
	    use.addEventListener('click', alertClicked, false);

	    // Add it to the "markers" group
	    document.getElementById("markers").appendChild(use);
	    
	}

};