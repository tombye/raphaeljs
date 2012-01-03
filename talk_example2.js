var r = Raphael("svg", 300, 250),
	bar = r.rect(80, 200, 120, 30).attr({stroke: "#fff", "stroke-width": 2}),
	lbl = r.text(140, 180, 30).attr({fill: "#fff", font: "20px Museo Sans"});
	
// Step 1

/*
lbl.attr({text: 130});
bar.animate({y: 100, height: 130}, 2000, ">");
lbl.animateWith(bar, {y: 80}, 2000, ">");
*/

// Step 2

/*
bar.animate({y: 100, height: 130}, 1000, ">");
lbl.animateWith(bar, {y: 80}, 1000, ">", function() {
	lbl.attr({text: 130});
});
*/

//Step 3

r.customAttributes.value = function(val) {
	return {text: Math.round(val)};
};
bar.animate({y: 100, height: 130}, 1000, ">");
lbl.attr({value: 30}).animateWith(bar, {y: 80, value: 130}, 1000, ">");