require.config({
	packages: [{
		name: "codemirror",
		location: "/lib/CodeMirror-5.5.0/",
		main: "lib/codemirror"
	}]
});

require(["codemirror",
	"codemirror/mode/clike/clike"
], function (CodeMirror) {
	window.CodeMirror = CodeMirror;
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