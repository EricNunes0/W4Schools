import TutorialManagePages from "./TutorialManagePages"

export default function TutorialSectionsRowPart(codes) {
    let parts = [];
    for(const code of codes) {
        switch(code.type) {
            case "code":
                let codeParts = [];
                const codesArrays = new TutorialManagePages().lineCodesFromJSON(code.code);
                for(const codesArray of codesArrays) {
                    for(const codeContent of codesArray) {
                        const content = [codeContent[0], codeContent[1], codeContent[2] || 0, codeContent[3] || 0];
                        const codeHTML = new TutorialManagePages().lineCodeToHTML(content);
                        codeParts.push(codeHTML);
                    }
                };
                parts.push(
                    <div className = "tutorial-sections-rows-codes-divs">{codeParts}</div>
                );
                break;
            case "content":
                const content = new TutorialManagePages().lineContent(code)
                parts.push(<div className = "tutorial-sections-rows-contents-divs">{content}</div>);
                break;
            case "text":
                const bold = code.bold || false;
                parts.push(
                    <p className = "tutorial-sections-rows-paragraphs" data-bold = {bold} style={code.style || {}}>{code.text}</p>
                );
                break;
            case "link":
                parts.push(
                    <a href = {code.link} target = {code.target || "_self"} className = "tutorial-sections-rows-links">{code.text}</a>
                );
                break;
        };
    };

    return (
        <div className = "tutorial-sections-rows-subparts">
            {parts}
        </div>
    );
};