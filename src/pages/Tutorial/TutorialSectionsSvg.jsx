export default function TutorialSectionsSvg(prop) {
    const content = prop.content;
    if(content) {
        let defs;
        if(content.defs) {
            let defsContent = [];
            for(const def of content.defs) {
                if(def.type === "linearGradient") {
                    let stops = [];
                    for(const stop of def.stops) {
                        stops.push(
                            <stop offset = {stop.offset || ""} stopColor = {stop.stopColor || ""}></stop>
                        );
                    };
                    defsContent.push(
                        <linearGradient id = {def.id || ""} x1 = {def.x1 || ""} y1 = {def.y1 || ""} x2 = {def.x2 || ""} y2 = {def.y2 || ""}>
                            {stops}
                        </linearGradient>
                    );
                };
            };
            defs = (<defs>
                {defsContent}
            </defs>);
        };
        let items;
        if(content.items) {
            let shapes = [];
            for(const item of content.items) {
                if(item.type === "circle") {
                    shapes.push(
                        <circle cx = {item.cx || ""} cy = {item.cy || ""} r = {item.r || ""} stroke = {item.stroke || ""} strokeWidth = {item.strokeWidth || ""} fill = {item.fill || ""}></circle>
                    );
                } else if(item.type === "ellipse") {
                    shapes.push(
                        <ellipse cx = {item.cx || ""} cy = {item.cy || ""} rx = {item.rx || ""} ry = {item.ry || ""} fill = {item.fill || ""}></ellipse>
                    );
                } else if(item.type === "polygon") {
                    shapes.push(
                        <polygon points = {item.points || ""} style = {item.style || {}}></polygon>
                    );
                } else if(item.type === "rect") {
                    shapes.push(
                        <rect x = {item.x || ""} y = {item.y || ""} rx = {item.rx || ""} ry = {item.ry || ""} width = {item.width || ""} height = {item.height || ""} stroke = {item.stroke || ""} strokeWidth = {item.strokeWidth || ""} fill = {item.fill || ""} style = {item.style || {}}></rect>
                    );
                } else if(item.type === "text") {
                    shapes.push(
                        <text fill = {item.fill || ""} fontSize = {item.fontSize || ""} fontFamily = {item.fontFamily || ""} x = {item.x || ""} y = {item.y || ""}>{item.content || ""}</text>
                    );
                };
            };

            items = (
                <>
                    {shapes}
                </>
            );
        };

        return (
            <svg className = "tutorial-sections-svg" width = {content.width || 0} height = {content.height || 0} xmlns="http://www.w3.org/2000/svg">
                {defs}
                {items}
            </svg>
        );
    };
};