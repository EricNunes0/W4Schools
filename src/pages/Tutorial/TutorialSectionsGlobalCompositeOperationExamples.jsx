export default function TutorialSectionsGlobalCompositeOperationExamples() {
    let divs = [];

    var gco=new Array();
    gco.push("source-over");
    gco.push("source-atop");
    gco.push("source-in");
    gco.push("source-out");
    gco.push("destination-over");
    gco.push("destination-atop");
    gco.push("destination-in");
    gco.push("destination-out");
    gco.push("lighter");
    gco.push("copy");
    gco.push("xor");

    for (let n = 0; n < gco.length; n++) {
        let id = `tutorial-sections-globalCompositeOperation-examples-${gco[n]}`;
        divs.push(
            <div style={{float: "left", width: 140}}>
                <span style={{color: "#aaa", fontSize: 12}}>{gco[n]}:</span>
                <br></br>
                <canvas id={id} width={120} height={100} style={{backgroundColor: "white", border: "1px solid #d3d3d3", margin: "5px"}}></canvas>
            </div>
        );
        
        setTimeout(function() {
            const canvas = document.getElementById(id);
            const ctx = canvas.getContext("2d");
            ctx.rect(10, 10, 50, 50);
            ctx.fillStyle = "blue";
            ctx.fill();
            ctx.globalCompositeOperation = gco[n];
            ctx.beginPath();
            ctx.arc(50, 50, 30, 0, 2 * Math.PI);
            ctx.fillStyle = "red";
            ctx.fill();
        }, 100)
    }








    return (
        <div className = "tutorial-sections-globalCompositeOperation-examples" style={{backgroundColor: "#fff", display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", alignItems: "center", width: 500, minHeight: 600, padding: 10, maxWidth: "100%"}}>
            {divs}
        </div>
    );
};