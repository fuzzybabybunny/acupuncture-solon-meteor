Template.SVGTest.rendered = function(){

	var colors = "0f0 0ff f60 f0f 00f f00".split(' '), i=0;

  $('path').click(function(){
      this.style.fill = "#"+colors[i++%colors.length];
  });

	var  markerPositions = [[225,175], [75,75], [150,225], [400,125], [300,300]];

	var svgNS = "http://www.w3.org/2000/svg";
	var xlinkNS = "http://www.w3.org/1999/xlink";

	for (var i=0; i<markerPositions.length; i++) {
	    // Create an SVG <use> element
	    var  use = document.createElementNS(svgNS, "use");
	    // Point it at our pin marker (the circle)
	    use.setAttributeNS(xlinkNS, "href", "#pin");
	    // Set it's x and y
	    use.setAttribute("x", markerPositions[i][0]);
	    use.setAttribute("y", markerPositions[i][1]);
	    debugger
	    use.onclick = function(){
	    	console.log("clicked!");
	    };

	    // Add it to the "markers" group
	    document.getElementById("markers").appendChild(use);
	    debugger
	}

};