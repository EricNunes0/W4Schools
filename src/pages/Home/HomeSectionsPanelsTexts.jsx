import codes from "./HomeSectionsPanelsCodes.json";

export default function HomeSectionsPanelsTexts(prop) {
    function PanelCode(index, code) {
        let texts = [];
        let paragraphs = code[0];

        function Paragraph(paragraph) {
            return (
                <p style = {{color: paragraph[1], paddingLeft: 6 * paragraph[2]}}>{paragraph[0]}</p>
            );
        };

        for(const paragraph of paragraphs) {
            texts.push(Paragraph(paragraph))
        };
        return (
            <div className = "home-sections-panels-texts-divs display-flex-row">
                <code className = "home-sections-panels-lines">{index + 1}</code>
                <code className = "home-sections-panels-texts" style = {{paddingLeft: (parseInt(code[1] * 25)) + "px"}}>{texts}</code>
            </div>
        )
    };
    
    if(codes[prop.language]) {
        let languageCodes = codes[prop.language];
        let allCodes = [];
        for(let i = 0; i <= languageCodes.length - 1; i++) {
            console.log(languageCodes[i])
            allCodes.push(PanelCode(i, languageCodes[i]));
        };

        return (
            <div className = "home-sections-panels-codes-divs display-flex-column" key = {`${prop.language}-${Math.floor(Math.random() * (1000 * 1000))}`}>
                {allCodes}
            </div>
        );
    };
}