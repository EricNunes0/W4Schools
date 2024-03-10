window.addEventListener("load", (event) => {
    const webWorkerStart = document.querySelector("#web-worker-start");
    const webWorkerStop = document.querySelector("#web-worker-stop");

    if(webWorkerStart && webWorkerStop) {
        var w;
        webWorkerStart.addEventListener("click", () => {
            if(typeof(window.Worker) !== "undefined") {
                if(typeof(w) == "undefined") {
                    w = new window.Worker("/scripts/html/web_workers/worker-1.js");
                };
                w.onmessage = function(event) {
                    document.getElementById("counter").innerHTML = event.data;
                };
            } else {
                document.getElementById("counter").innerHTML = "Seu navegador não suporta Web Workers...";
            };
        });

        webWorkerStop.addEventListener("click", () => {
            if(typeof(w) !== "undefined") {
                w.terminate();
                w = undefined;
            };
        });
    };
});
