function getColor(ctx, x, y, width, height, color) {
    let newColor;
    if(color.type === "text") {
        newColor = color.text;
    } else if(color.type === "gradient") {
        if(color.gradient === "linear") {
            newColor = linearGradient(ctx, color);
        };
    };
    return newColor;
};

function linearGradient(ctx, color) {
    let gradient = ctx.createLinearGradient(color.x0, color.y0, color.x1, color.y1);
    for(const stop of color.stops) {
        gradient.addColorStop(stop.offset, stop.color);
    };
    return gradient;
};

function drawRect(ctx, x, y, width, height, color) {
    let colorToFill = getColor(ctx, x, y, width, height, color);
    console.log(colorToFill)
    ctx.fillStyle = colorToFill;
    ctx.fillRect(x, y, width, height);
};

export default function TutorialSectionsCanvas(prop) {
    const content = prop.content;
    if(content) {
        let id = Math.floor(Math.random() * (1000 * 1000));
        let canvasId = `tutorial-sections-canvas-${id}`;

        function addDraws() {
            const canvas = document.querySelector(`#${canvasId}`);
            const ctx = canvas.getContext("2d");
            for(const draw of content.draws) {
                if(draw.draw === "rect") {
                    drawRect(ctx, draw.x, draw.y, draw.width, draw.height, draw.color);
                };
            };
        };

        setTimeout(function() {
            addDraws();
        }, 0.1 * 1000);

        return (
            <canvas className = "tutorial-sections-canvas" id = {canvasId} width = {content.width || ""} height = {content.height || ""}
                style = {{
                    backgroundColor: content.backgroundColor || ""
                }}
            ></canvas>
        );
    };
};