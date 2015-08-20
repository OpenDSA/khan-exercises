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
    window.CodeMirror = CodeMirror;
    loadCss("../../lib/CodeMirror-5.5.0/lib/codemirror.css");

    function loadCss(url) {
        var link = document.createElement("link");
        link.type = "text/css";
        link.rel = "stylesheet";
        link.href = url;
        document.getElementsByTagName("head")[0].appendChild(link);
    }
});