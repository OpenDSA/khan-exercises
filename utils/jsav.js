define(function(require) {
	require([
		"../../JSAV/lib/jquery.transit",
		"../../JSAV/lib/raphael"
	], function() {
		require(["jsav"], function() {
			loadCss("../../JSAV/css/JSAV.css");
			loadCss("../../lib/odsaStyle-min.css");

			function loadCss(url) {
				var link = document.createElement("link");
				link.type = "text/css";
				link.rel = "stylesheet";
				link.href = url;
				document.getElementsByTagName("head")[0].appendChild(link);
			}
		})
	});
});