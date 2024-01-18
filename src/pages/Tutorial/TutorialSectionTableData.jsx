export default function TutorialSectionTableData(data) {
    switch(data.tag) {
        case "th":
            return (<th className = "tutorial-sections-th" data-italic = {data.italic || false}>{data.text}</th>);
        case "td":
            return (<td className = "tutorial-sections-td" data-italic = {data.italic || false}>{data.text}</td>);
    };
};