import TutorialManagePages from "./TutorialManagePages"

export default function TutorialListItemMultiple(codes) {
    let parts = [];
    for(const code of codes) {
        switch(code.type) {
            case "code":
                let codeParts = [];
                let codesArrays = new TutorialManagePages().lineCodesFromJSON(code.code);
                console.log(code.spacesBefore)
                if(code.spacesBefore) {
                    codesArrays[0][0][2] = code.spacesBefore;
                };
                for(const codesArray of codesArrays) {
                    for(const codeContent of codesArray) {
                        const content = [codeContent[0], codeContent[1], codeContent[2] || 0, codeContent[3] || 0];
                        console.warn(content)
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
                parts.push(
                    <p className = "tutorial-sections-lists-items-paragraphs">{code.code}</p>
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