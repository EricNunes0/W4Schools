export default function TutorialExampleResults(prop) {
    const results = prop.results;
    if(results) {
        if(results.type === "inner") {
            return (
                <div className = "tutorials-examples-results-divs">
                    <h1 className = "tutorials-examples-results-titles">{results.title || "Resultados"}</h1>
                    <div className = "tutorials-examples-results" dangerouslySetInnerHTML={{__html: results.code}}></div>
                </div>
            );
        };
    };
};