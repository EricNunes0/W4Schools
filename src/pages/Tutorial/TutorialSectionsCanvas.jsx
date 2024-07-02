function getColor({ctx, color}) {
    let newColor = null;
    if(color) {
        if(color.type === "text") {
            newColor = color.text;
        } else if(color.type === "gradient") {
            if(color.gradient === "linear") {
                newColor = linearGradient({ctx: ctx, color: color});
            } else if(color.gradient === "circular") {
                newColor = circularGradient({ctx: ctx, color: color});
            };
        };
    };
    return newColor;
};

function circularGradient({ctx, color}) {
    let gradient = ctx.createRadialGradient(color.x0, color.y0, color.r0, color.x1, color.y1, color.r1);
    for(const stop of color.stops) {
        gradient.addColorStop(stop.offset, stop.color);
    };
    return gradient;
};

function linearGradient({ctx, color}) {
    let gradient = ctx.createLinearGradient(color.x0, color.y0, color.x1, color.y1);
    for(const stop of color.stops) {
        gradient.addColorStop(stop.offset, stop.color);
    };
    return gradient;
};

function drawCircle({ctx, data}) {
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.fillStyle = colorToFill;
    ctx.beginPath();
    ctx.arc(data.x, data.y, data.radius, data.startAngle, data.endAngle * Math.PI);
    ctx.stroke();
};

function drawLine({ctx, data}) {
    ctx.beginPath();
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.strokeStyle = colorToFill;
    ctx.lineWidth = data.lineWidth || 1;
    ctx.moveTo(data.x0, data.y0);
    ctx.lineTo(data.x1, data.y1);
    ctx.stroke();
};

function drawBeginPath({ctx}) {
    ctx.beginPath();
};

function drawMoveTo({ctx, data}) {
    ctx.moveTo(data.x, data.y);
};

function drawLineTo({ctx, data}) {
    ctx.lineTo(data.x, data.y);
};

function drawClosePath({ctx}) {
    ctx.closePath();
};

function drawFill({ctx}) {
    ctx.fill();
};

function drawFillStyle({ctx, data}) {
    ctx.fillStyle = data.value;
};

function drawLineWidth({ctx, data}) {
    ctx.lineWidth = data.value;
};

function drawStroke({ctx}) {
    ctx.stroke();
};

function drawStrokeStyle({ctx, data}) {
    ctx.strokeStyle = data.value;
};

function drawRect({ctx, data}) {
    ctx.rect(data.x, data.y, data.width, data.height);
};

function drawFullRect({ctx, data}) {
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.fillStyle = colorToFill;
    ctx.fillRect(data.x, data.y, data.width, data.height);
};

function drawStrokeRect({ctx, data}) {
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.strokeStyle = colorToFill;
    ctx.strokeRect(data.x, data.y, data.width, data.height);
};

function drawClearRect({ctx, data}) {
    ctx.clearRect(data.x, data.y, data.width, data.height);
};

function drawText({ctx, data}) {
    ctx.font = `${data.size}px ${data.font}`;
    if(data.color) {
        let fillColor = getColor({ctx: ctx, color: data.color});
        ctx.fillStyle = fillColor;
        ctx.fillText(data.content, data.x, data.y);

    };
    if(data.stroke) {
        let strokeColor = getColor({ctx: ctx, color: data.stroke});
        ctx.strokeStyle = strokeColor;
        ctx.strokeText(data.content, data.x, data.y);
    };
    
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
                    drawRect({ctx: ctx, data: draw});
                } else if(draw.draw === "fullRect") {
                    drawFullRect({ctx: ctx, data: draw});
                } else if(draw.draw === "strokeRect") {
                    drawStrokeRect({ctx: ctx, data: draw});
                } else if(draw.draw === "clearRect") {
                    drawClearRect({ctx: ctx, data: draw});
                } else if(draw.draw === "beginPath") {
                    drawBeginPath({ctx: ctx, data: draw});
                } else if(draw.draw === "closePath") {
                    drawClosePath({ctx: ctx, data: draw});
                } else if(draw.draw === "moveTo") {
                    drawMoveTo({ctx: ctx, data: draw});
                } else if(draw.draw === "lineTo") {
                    drawLineTo({ctx: ctx, data: draw});
                } else if(draw.draw === "fill") {
                    drawFill({ctx: ctx, data: draw});
                } else if(draw.draw === "fillStyle") {
                    drawFillStyle({ctx: ctx, data: draw});
                } else if(draw.draw === "lineWidth") {
                    drawLineWidth({ctx: ctx, data: draw});
                } else if(draw.draw === "stroke") {
                    drawStroke({ctx: ctx, data: draw});
                } else if(draw.draw === "strokeStyle") {
                    drawStrokeStyle({ctx: ctx, data: draw});
                } else if(draw.draw === "text") {
                    drawText({ctx: ctx, data: draw});
                } else if(draw.draw === "line") {
                    drawLine({ctx: ctx, data: draw});
                } else if(draw.draw === "circle") {
                    drawCircle({ctx: ctx, data: draw});
                };
            };
        };

        setTimeout(function() {
            addDraws();
        }, 0 * 1000);

        return (
            <canvas className = "tutorial-sections-canvas" id = {canvasId} width = {content.width || ""} height = {content.height || ""}
                style = {{
                    backgroundColor: content.backgroundColor || ""
                }}
            ></canvas>
        );
    };
};