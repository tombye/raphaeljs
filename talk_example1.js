var r = Raphael("svg", 300, 250),
	bg1 = r.path("M50,150 a100,100, 0, 0, 1, 180, 0").attr({stroke: "#fff", "stroke-width": 28, "stroke-linecap": "round"}),
	bg2 = r.path("M50,150 a100,100, 0, 0, 1, 180, 0").attr({stroke: "#000", "stroke-width": 24, "stroke-linecap": "round"}),
	bar = r.path("M50,150 a100,100, 0, 0, 1, .01, 0").attr({stroke: "#fff", "stroke-width": 20, "stroke-linecap": "round"});
	
// bar.animate({path: "M50, 150a100, 100, 0, 0, 1, 180, 0"}, 2000, ">"); // Part 1
	
var a = Math.acos(90 / 100),
	an = Math.PI - 2 * a;
	
r.customAttributes.value = function(val) {
	var angle =  Math.PI + a + an / 100 * val,
		x = 140 + 100 * Math.cos(angle),
		y = 193.6 + 100 * Math.sin(angle);
	return {path: "M50,150 A100,100, 0, 0, 1, " + [x, y]};
};

bar.attr({value: 0}).animate({value: 100}, 2000, ">"); // part 2