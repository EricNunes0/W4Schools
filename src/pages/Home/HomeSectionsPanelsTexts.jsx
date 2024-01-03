import codes from "./HomeSectionsPanelsCodes.json";

export default function HomeSectionsPanelsTexts(prop) {
    function PanelCode(index, code) {
        return (
            <div className = "home-sections-panels-texts-divs display-flex-row">
                <code className = "home-sections-panels-lines">{index + 1}</code>
                <code className = "home-sections-panels-texts" style = {{paddingLeft: (parseInt(code[1] * 25)) + "px"}}>{code[0]}</code>
            </div>
        )
    };
    
    if(codes[prop.language]) {
        let languageCodes = codes[prop.language];
        let allCodes = [];
        for(let i = 0; i <= languageCodes.length - 1; i++) {
            allCodes.push(PanelCode(i, languageCodes[i]));
        };

        return (
            <div className = "home-sections-panels-codes-divs display-flex-column" key = {prop.language}>
                {allCodes}
            </div>
        );
    };
}