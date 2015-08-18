require.config({
	packages: [{
		// name: "codemirror",
		name: "jsav",
		// location: "/lib/CodeMirror-5.5.0/",
		location: "/JSAV/",
		// main: "lib/codemirror"
		main: "build/JSAV-min"
	}]
});

require(["jsav"], function () {
	// console.dir(JSAV);
	// window.JSAV = JSAV;
	// $.extend(KhanUtil, {
	// 	CodeMirror: CodeMirror
	// });
	// window.editor = CodeMirror.fromTextArea(code, {
	// 	lineNumbers: true,
	// 	mode: "text/x-java"
	// });
	// console.log("in CodeMIrror function");
	// alert("in CodeMIrror function");
	// var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
	// 	lineNumbers: true,
	// 	mode: "text/x-java",
	// });
});