require.config({
    packages: [{
        name: "codemirror",
        location: "/lib/CodeMirror-5.5.0/",
        main: "lib/codemirror"
    }]
});

require(["codemirror",
    "codemirror/mode/clike/clike"
], function(CodeMirror) {
    $.extend(KhanUtil, {
        CodeMirror: CodeMirror
    });
});