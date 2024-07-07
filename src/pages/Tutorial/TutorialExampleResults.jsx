export default function TutorialExampleResults(prop) {
    function innerJoin(codes) {
        let finalCode = [];
        for(const code of codes) {
            if(typeof code === "string") {
                finalCode.push(code);
            } else if(typeof code  === "object") {
                code.forEach((c) => {
                    finalCode.push(c);
                });
            }
        };
        finalCode = finalCode.join("");
        return finalCode;
    };

    const results = prop.results;
    if(results) {
        if(results.type === "inner" || results.type === "innerjoin") {
            let code;
            switch(results.type) {
                case "inner":
                    code = results.code;
                    break;
                case "innerjoin":
                    code = innerJoin(results.codes);
                    break;
            };

            let resultsTitle;
            if(results.title === null) {
                resultsTitle = "";
            } else if(!results.title) {
                resultsTitle = "Resultados";
            } else {
                resultsTitle = results.title;
            }
            return (
                <div className = "tutorials-examples-results-divs">
                    <h1 className = "tutorials-examples-results-titles">{resultsTitle}</h1>
                    <div className = "tutorials-examples-results" dangerouslySetInnerHTML={{__html: code}}></div>
                </div>
            );
        }
    };
};