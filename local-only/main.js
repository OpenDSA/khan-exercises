requirejs.config({
    paths: {
        "jquery": "/khan-exercises/local-only/jquery",
    }
});

requirejs([
    "jquery",
    "/khan-exercises/local-only/katex/katex.js",
    // "/lib/codemirror/lib/codemirror.js",
    "/khan-exercises/local-only/underscore.js",
    "/khan-exercises/local-only/jed.js",
    "/khan-exercises/local-only/localeplanet/icu." + getLang() + ".js",
    "/khan-exercises/local-only/moment.js",
    "/lib/CodeMirror-5.5.0/lib/codemirror",
    "/lib/CodeMirror-5.5.0/mode/htmlmixed/htmlmixed"
], function ($, katex, CodeMirror) {
    // console.log("inside codemirror main");
    // window.editor = CodeMirror.fromTextArea(document.getElementById("codeTextarea"), {
    //     lineNumbers: true,
    //     mode: "text/x-java"
    // });
    // CodeMirror.fromTextArea(document.getElementById("code"), {
    //     lineNumbers: true,
    //     mode: "html"
    // });
    // Only 'jquery' and 'katex' have amd wrappers (and jQuery sets the global
    // regardless); the other files export globally directly and we don't use
    // their return values
    window.katex = katex;

    // These scripts depend on jQuery or underscore, so we wait to load them
    requirejs([
        "/khan-exercises/exercises-stub.js",
        "/khan-exercises/local-only/jquery-migrate-1.1.1.js",
        "/khan-exercises/local-only/jquery-ui.js",
        "/khan-exercises/local-only/jquery.qtip.js",
        "/khan-exercises/local-only/kas.js",
        "/khan-exercises/local-only/i18n.js",
        "/lib/codemirror/mode/clike/clike.js"
    ], function () {
        // console.log("inside codemirror main");
        // window.editor = CodeMirror.fromTextArea(document.getElementById("codeTextarea"), {
        //     lineNumbers: true,
        //     mode: "text/x-java"
        // });
        requirejs([
            "/khan-exercises/history.js",
            "/khan-exercises/interface.js",
        ], function () {
            requirejs(["/khan-exercises/khan-exercise.js"], function () {
                // Khan.loadLocalModeSiteWhenReady();
                Khan.loadOpenDSAExercises();
            });
        });
    });
});

// require(["/codemirror-4.5/lib/codemirror.js",
//     "/codemirror-4.5/mode/htmlmixed/htmlmixed.js"
// ], function (CodeMirror) {
//     CodeMirror.fromTextArea(document.getElementById("code"), {
//         lineNumbers: true,
//         mode: "html"
//     });
// });
// requirejs([
//     "/lib/codemirror/lib/codemirror.js"
// ], function () {
//     requirejs([
//         "/lib/codemirror/mode/clike/clike.js"
//     ], function () {
//         console.log("inside codemirror main");
//         window.editor = CodeMirror.fromTextArea(codeTextarea, {
//             lineNumbers: true,
//             mode: "text/x-java"
//         });
//     });
// });
function getLang() {
    var match = /[?&]lang=([^&]+)/.exec(window.location.search);
    return match ? match[1] : "en-US";
}



require([
    "cm/lib/codemirror", "cm/mode/htmlmixed/htmlmixed"
], function (CodeMirror) {
    CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        mode: "htmlmixed"
    });
});
It will automatically load the modes that the mixed HTML mode depends on(XML, JavaScript, and CSS).Do not use RequireJS ' paths option to configure the path to CodeMirror, since it will break loading submodules through relative paths. Use the packages configuration option instead, as in:

require.config({
    packages: [{
        name: "codemirror",
        location: "../path/to/codemirror",
        main: "lib/codemirror"
    }]
});