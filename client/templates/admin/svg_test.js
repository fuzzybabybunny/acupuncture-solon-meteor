Template.SVGTest.rendered = function(){

	var colors = "0f0 0ff f60 f0f 00f f00".split(' '), i=0;

  $('path').click(function(){
      this.style.fill = "#"+colors[i++%colors.length];
  });


};