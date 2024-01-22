export default function TutorialSectionTableData(data) {
    switch(data.tag) {
        case "th":
            return (
                <th className = "tutorial-sections-th" data-italic = {data.italic || false}>
                    {data.text}
                </th>
            );
        case "td":
            let link;
            if(data.href) {
                link = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"}>{data.text}</a>)];
            }
            return (
                <td className = "tutorial-sections-td" data-italic = {data.italic || false}>
                    {link || data.text}
                </td>
            );
    };
};