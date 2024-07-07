/* arc() */
function drawArc({ctx, data}) {
    ctx.arc(data.x, data.y, data.r, data.s, data.e * Math.PI, data.c || false);
};

/* arcTo() */
function drawArcTo({ctx, data}) {
    ctx.arcTo(data.x1, data.y1, data.x2, data.y2, data.r);
};

/* beginPath() */
function drawBeginPath({ctx}) {
    ctx.beginPath();
};

/* bezierCurveTo() */
function drawBezierCurveTo({ctx, data}) {
    ctx.bezierCurveTo(data.cp1x, data.cp1y, data.cp2x, data.cp2y, data.x, data.y);
};

/* Desenhando círculo */
function drawCircle({ctx, data}) {
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.fillStyle = colorToFill;
    ctx.beginPath();
    ctx.arc(data.x, data.y, data.radius, data.startAngle, data.endAngle * Math.PI);
    ctx.stroke();
};

/* clearRect() */
function drawClearRect({ctx, data}) {
    ctx.clearRect(data.x, data.y, data.width, data.height);
};

/* clip() */
function drawClip({ctx, data}) {
    ctx.clip();
};

/* createImageData() */
function drawCreateImageData({ctx, data}) {
    const imgData = ctx.createImageData(data.width, data.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i+0] = data.r;
        imgData.data[i+1] = data.g;
        imgData.data[i+2] = data.b;
        imgData.data[i+3] = data.a;
    }
    ctx.putImageData(imgData, 10, 10);
};

/* createLinearGradient() */
function drawCreateLinearGradient({ctx, data}) {
    const gradient = ctx.createLinearGradient(data.x0, data.y0, data.x1, data.y1);
    if(data.stops) {
        for(const stop of data.stops) {
            gradient.addColorStop(stop.stop, stop.color);
        };
    };
    ctx.fillStyle = gradient;
    if(data.strokeStyle) {
        if(data.strokeStyle === true) {
            ctx.strokeStyle = gradient;
        }
    }
};

/* createPattern() */
function drawCreatePattern({ctx, data}) {
    const pat = ctx.createPattern(document.getElementById(data.image), data.value);
    ctx.fillStyle = pat;
};

/* createRadialGradient() */
function drawCreateRadialGradient({ctx, data}) {
    const gradient = ctx.createRadialGradient(data.x0, data.y0, data.r0, data.x1, data.y1, data.r1);
    if(data.stops) {
        for(const stop of data.stops) {
            gradient.addColorStop(stop.stop, stop.color);
        };
    };
    ctx.fillStyle = gradient;
    if(data.strokeStyle) {
        if(data.strokeStyle === true) {
            ctx.strokeStyle = gradient;
        }
    }
};

/* closePath() */
function drawClosePath({ctx}) {
    ctx.closePath();
};

/* drawImage() */
function drawImage({ctx, data}) {
    const img = document.getElementById(data.image);
    function exists(value) {return value !== undefined};

    if(exists(data.x) && exists(data.y)) {
        if(data.width && data.height) {
            if(data.sx && data.sy && data.swidth && data.sheight) {
                ctx.drawImage(img, data.sx, data.sy, data.swidth, data.sheight, data.x, data.y, data.width, data.height);
                return;
            }
            ctx.drawImage(img, data.x, data.y, data.width, data.height);
            return;
        }
        ctx.drawImage(img, data.x, data.y);
    };
};

/* fill() */
function drawFill({ctx}) {
    ctx.fill();
};

/* fillRect() */
function drawFillRect({ctx, data}) {
    ctx.fillRect(data.x, data.y, data.width, data.height);
};

/* fillStyle */
function drawFillStyle({ctx, data}) {
    ctx.fillStyle = data.value;
};

/* fillText() */
function drawFillText({ctx, data}) {
    ctx.fillText(data.text, data.x, data.y, data.maxWidth);
};

/* font */
function drawFont({ctx, data}) {
    ctx.font = data.value;
};

/* globalAlpha */
function drawGlobalAlpha({ctx, data}) {
    ctx.globalAlpha = data.value;
};

/* globalCompositeOperation */
function drawGlobalCompositeOperation({ctx, data}) {
    ctx.globalCompositeOperation = data.value;
};

/* invertImageData */
function drawInvertImageData({ctx, data}) {
    const imgData = ctx.getImageData(data.x, data.y, data.width, data.height);
    for (let i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255-imgData.data[i];
        imgData.data[i+1] = 255-imgData.data[i+1];
        imgData.data[i+2] = 255-imgData.data[i+2];
        imgData.data[i+3] = 255;
    }
    ctx.putImageData(imgData, data.putX, data.putY);
};

/* miterLimit */
function drawMiterLimit({ctx, data}) {
    ctx.miterLimit = data.value;
};

/* moveTo() */
function drawMoveTo({ctx, data}) {
    ctx.moveTo(data.x, data.y);
};

/* Desenhando uma linha */
function drawLine({ctx, data}) {
    ctx.beginPath();
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.strokeStyle = colorToFill;
    ctx.lineWidth = data.lineWidth || 1;
    ctx.moveTo(data.x0, data.y0);
    ctx.lineTo(data.x1, data.y1);
    ctx.stroke();
};

/* lineCap */
function drawLineCap({ctx, data}) {
    ctx.lineCap = data.value;
};

/* lineJoin */
function drawLineJoin({ctx, data}) {
    ctx.lineJoin = data.value;
};

/* lineTo() */
function drawLineTo({ctx, data}) {
    ctx.lineTo(data.x, data.y);
};

/* lineWidth */
function drawLineWidth({ctx, data}) {
    ctx.lineWidth = data.value;
};

/* quadraticCurveTo() */
function drawQuadraticCurveTo({ctx, data}) {
    ctx.quadraticCurveTo(data.cpx, data.cpy, data.x, data.y);
};

/* rect() */
function drawRect({ctx, data}) {
    ctx.rect(data.x, data.y, data.width, data.height);
};

/* restore() */
function drawRestore({ctx, data}) {
    ctx.restore();
};

/* rotate() */
function drawRotate({ctx, data}) {
    ctx.rotate(data.angle * Math.PI / 180);
};

/* save() */
function drawSave({ctx, data}) {
    ctx.save();
};

/* scale() */
function drawScale({ctx, data}) {
    ctx.scale(data.scalewidth, data.scaleheight);
};

/* setTransform() */
function drawSetTransform({ctx, data}) {
    ctx.setTransform(data.a, data.b, data.c, data.d, data.e, data.f);
};

/* shadowBlur */
function drawShadowBlur({ctx, data}) {
    ctx.shadowBlur = data.value;
};

/* shadowColor */
function drawShadowColor({ctx, data}) {
    ctx.shadowColor = data.value;
};

/* shadowOffsetX */
function drawShadowOffsetX({ctx, data}) {
    ctx.shadowOffsetX = data.value;
};

/* shadowOffsetY */
function drawShadowOffsetY({ctx, data}) {
    ctx.shadowOffsetY = data.value;
};

/* stroke() */
function drawStroke({ctx}) {
    ctx.stroke();
};

/* strokeStyle */
function drawStrokeStyle({ctx, data}) {
    ctx.strokeStyle = data.value;
};

/* strokeText() */
function drawStrokeText({ctx, data}) {
    ctx.strokeText(data.text, data.x, data.y, data.maxWidth);
};

/* Desenhando texto */
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

/* textAlign */
function drawTextAlign({ctx, data}) {
    ctx.textAlign = data.value;
};

/* textBaseline */
function drawTextBaseline({ctx, data}) {
    ctx.textBaseline = data.value;
};

/* transform() */
function drawTransform({ctx, data}) {
    ctx.transform(data.a, data.b, data.c, data.d, data.e, data.f);
};

/* translate() */
function drawTranslate({ctx, data}) {
    ctx.translate(data.x, data.y);
};

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

/* Desenhando retângulo */
function drawFullRect({ctx, data}) {
    let colorToFill = getColor({ctx: ctx, color: data.color});
    ctx.fillStyle = colorToFill;
    ctx.fillRect(data.x, data.y, data.width, data.height);
};

/* Desenhando retângulo */
function drawStrokeRect({ctx, data}) {
    if(data.color) {
        let colorToFill = getColor({ctx: ctx, color: data.color});
        ctx.strokeStyle = colorToFill;
    };
    ctx.strokeRect(data.x, data.y, data.width, data.height);
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
                if(draw.draw === "arc") {
                    drawArc({ctx: ctx, data: draw});
                } else if(draw.draw === "arcTo") {
                    drawArcTo({ctx: ctx, data: draw});
                } else if(draw.draw === "beginPath") {
                    drawBeginPath({ctx: ctx, data: draw});
                } else if(draw.draw === "bezierCurveTo") {
                    drawBezierCurveTo({ctx: ctx, data: draw});
                } else if(draw.draw === "circle") {
                    drawCircle({ctx: ctx, data: draw});
                } else if(draw.draw === "clearRect") {
                    drawClearRect({ctx: ctx, data: draw});
                } else if(draw.draw === "clip") {
                    drawClip({ctx: ctx, data: draw});
                } else if(draw.draw === "createImageData") {
                    drawCreateImageData({ctx: ctx, data: draw});
                } else if(draw.draw === "createLinearGradient") {
                    drawCreateLinearGradient({ctx: ctx, data: draw});
                } else if(draw.draw === "createPattern") {
                    drawCreatePattern({ctx: ctx, data: draw});
                } else if(draw.draw === "createRadialGradient") {
                    drawCreateRadialGradient({ctx: ctx, data: draw});
                } else if(draw.draw === "closePath") {
                    drawClosePath({ctx: ctx, data: draw});
                } else if(draw.draw === "drawImage") {
                    drawImage({ctx: ctx, data: draw});
                } else if(draw.draw === "fill") {
                    drawFill({ctx: ctx, data: draw});
                } else if(draw.draw === "fillRect") {
                    drawFillRect({ctx: ctx, data: draw});
                } else if(draw.draw === "fillStyle") {
                    drawFillStyle({ctx: ctx, data: draw});
                } else if(draw.draw === "fillText") {
                    drawFillText({ctx: ctx, data: draw});
                } else if(draw.draw === "font") {
                    drawFont({ctx: ctx, data: draw});
                } else if(draw.draw === "fullRect") {
                    drawFullRect({ctx: ctx, data: draw});
                } else if(draw.draw === "globalAlpha") {
                    drawGlobalAlpha({ctx: ctx, data: draw});
                } else if(draw.draw === "globalCompositeOperation") {
                    drawGlobalCompositeOperation({ctx: ctx, data: draw});
                } else if(draw.draw === "invertImageData") {
                    drawInvertImageData({ctx: ctx, data: draw});
                } else if(draw.draw === "miterLimit") {
                    drawMiterLimit({ctx: ctx, data: draw});
                } else if(draw.draw === "moveTo") {
                    drawMoveTo({ctx: ctx, data: draw});
                } else if(draw.draw === "line") {
                    drawLine({ctx: ctx, data: draw});
                } else if(draw.draw === "lineCap") {
                    drawLineCap({ctx: ctx, data: draw});
                } else if(draw.draw === "lineJoin") {
                    drawLineJoin({ctx: ctx, data: draw});
                } else if(draw.draw === "lineTo") {
                    drawLineTo({ctx: ctx, data: draw});
                } else if(draw.draw === "lineWidth") {
                    drawLineWidth({ctx: ctx, data: draw});
                } else if(draw.draw === "quadraticCurveTo") {
                    drawQuadraticCurveTo({ctx: ctx, data: draw});
                } else if(draw.draw === "rect") {
                    drawRect({ctx: ctx, data: draw});
                } else if(draw.draw === "restore") {
                    drawRestore({ctx: ctx, data: draw});
                } else if(draw.draw === "rotate") {
                    drawRotate({ctx: ctx, data: draw});
                } else if(draw.draw === "save") {
                    drawSave({ctx: ctx, data: draw});
                } else if(draw.draw === "scale") {
                    drawScale({ctx: ctx, data: draw});
                } else if(draw.draw === "setTransform") {
                    drawSetTransform({ctx: ctx, data: draw});
                } else if(draw.draw === "shadowBlur") {
                    drawShadowBlur({ctx: ctx, data: draw});
                } else if(draw.draw === "shadowColor") {
                    drawShadowColor({ctx: ctx, data: draw});
                } else if(draw.draw === "shadowOffsetX") {
                    drawShadowOffsetX({ctx: ctx, data: draw});
                } else if(draw.draw === "shadowOffsetY") {
                    drawShadowOffsetY({ctx: ctx, data: draw});
                } else if(draw.draw === "stroke") {
                    drawStroke({ctx: ctx, data: draw});
                } else if(draw.draw === "strokeRect") {
                    drawStrokeRect({ctx: ctx, data: draw});
                } else if(draw.draw === "strokeStyle") {
                    drawStrokeStyle({ctx: ctx, data: draw});
                } else if(draw.draw === "strokeText") {
                    drawStrokeText({ctx: ctx, data: draw});
                } else if(draw.draw === "text") {
                    drawText({ctx: ctx, data: draw});
                } else if(draw.draw === "textAlign") {
                    drawTextAlign({ctx: ctx, data: draw});
                } else if(draw.draw === "textBaseline") {
                    drawTextBaseline({ctx: ctx, data: draw});
                } else if(draw.draw === "transform") {
                    drawTransform({ctx: ctx, data: draw});
                } else if(draw.draw === "translate") {
                    drawTranslate({ctx: ctx, data: draw});
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