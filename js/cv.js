(function () {

    var originSize;
    var preDOM;

    $("body").on("UPDATE", ".vco-slider", function (event, page) {
        // console.log(page);
        if (preDOM) preDOM.css({fontSize: originSize})

        var operate = eval("$('#time" + page + "')");
        originSize = operate.css("fontSize")
        preDOM = operate

        operate.css({fontSize: "16pt"});

    });

    $("body").on("UPDATE", ".vco-navigation", function (event, page) {
        // console.log(page);
        if (preDOM) preDOM.css({fontSize: originSize})

        var operate = eval("$('#time" + page + "')");
        originSize = operate.css("fontSize")
        preDOM = operate

        operate.css({fontSize: "16pt"});
    });


    $("body").on("LOADED", ".vco-slider", function (event) {
        console.log("L1")
    });

    $("body").on("LOADED", ".vco-navigation", function (event) {
        console.log("L2")
    });

    console.log("cv.js Loaded completely.")

})();