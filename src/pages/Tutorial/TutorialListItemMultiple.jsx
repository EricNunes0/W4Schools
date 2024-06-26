import TutorialManagePages from "./TutorialManagePages"

export default function TutorialListItemMultiple(codes) {
    let parts = [];
    for(const code of codes) {
        switch(code.type) {
            case "code":
                let codeParts = [];
                let codesArrays = new TutorialManagePages().lineCodesFromJSON(code.code);
                if(code.spacesBefore) {
                    codesArrays[0][0][2] = code.spacesBefore;
                };
                for(const codesArray of codesArrays) {
                    for(const codeContent of codesArray) {
                        const content = [codeContent[0], codeContent[1], codeContent[2] || 0, codeContent[3] || 0];
                        const codeHTML = new TutorialManagePages().lineCodeToHTML(content);
                        codeParts.push(codeHTML);
                    }
                };
                parts.push(
                    <div className = "tutorial-sections-lists-items-codes-divs">{codeParts}</div>
                );
                break;
            case "div":
                parts.push(
                    <div className = "tutorial-sections-lists-items-divs" style = {code.style}>{code.code || code.text || ""}</div>
                );
                break;
            case "text":
                let text = code.code || code.text || "";
                parts.push(
                    <p className = "tutorial-sections-lists-items-paragraphs" style = {{fontWeight: code.fontWeight, paddingLeft: `${code.spacesBefore * 6}px`, paddingRight: `${code.spacesAfter * 6}px`}}>{text}</p>
                );
                break;
            case "link":
                parts.push(
                    <a href = {code.link} target = {code.target || "_self"} className = "tutorial-sections-lists-links">{code.text}</a>
                );
                break;
        };
    };

    return (
        <div className = "tutorial-sections-lists-items-parts">
            {parts}
        </div>
    );
};