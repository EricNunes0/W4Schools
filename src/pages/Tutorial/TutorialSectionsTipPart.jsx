import TutorialManagePages from "./TutorialManagePages"

export default function TutorialSectionsTipPart(codes) {
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
            case "text":
                const bold = code.bold || false;
                parts.push(
                    <p className = "tutorial-sections-tips-paragraphs" data-bold = {bold}>{code.text}</p>
                );
                break;
            case "link":
                parts.push(
                    <a href = {code.link} target = {code.target || "_self"} className = "tutorial-sections-tips-links">{code.text}</a>
                );
                break;
        };
    };

    return (
        <div className = "tutorial-sections-tips-subparts">
            {parts}
        </div>
    );
};