Raphael.fn.arrow = function(x, y) {
	return this.path(["M", x, y] + "m-10-10l20, 0, 0-6, 10, 16-10, 16, 0-6 -20, 0 0, 6 -10-16 10-16z").attr({ // concatenating the Array & String produces a string
		fill: "#fff",
		stroke: "none",
		opacity: 0.2
	});;	
};

Raphael.fin.fill = function(fill) {
	this.attr({ fill: fill });
};

Raphael.el.stroke = function(stroke) {
	this.attr({ stroke: stroke });	
};