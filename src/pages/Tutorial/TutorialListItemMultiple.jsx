import TutorialManagePages from "./TutorialManagePages"

export default function TutorialListItemMultiple(codes) {
    let parts = [];
    for(const code of codes) {
        switch(code.type) {
            case "code":
                let codeParts = [];
                const codesArrays = new TutorialManagePages().lineCodesFromJSON(code.code);
                for(const codesArray of codesArrays) {
                    for(const codeContent of codesArray) {
                        const content = [codeContent[0], codeContent[1], codeContent[2] || 0, codeContent[3] || 0];
                        console.log(content)
                        const codeHTML = new TutorialManagePages().lineCodeToHTML(content);
                        codeParts.push(codeHTML);
                    }
                };
                console.log(codeParts)
                parts.push(
                    <div className = "tutorial-sections-lists-items-codes-divs">{codeParts}</div>
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