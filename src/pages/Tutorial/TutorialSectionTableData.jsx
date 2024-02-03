export default function TutorialSectionTableData(data) {
    switch(data.tag) {
        case "th":
            return (
                <th className = "tutorial-sections-th" data-italic = {data.italic || false}>
                    {data.text}
                </th>
            );
        case "td":
            let content;
            let supports;

            /* Definindo conteúdo */
            if(data.icon) {
                content = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"}>
                    <i className = "tutorial-sections-td-icons" style = {{backgroundImage: `url("${data.icon || ""}")`}}></i>
                </a>)];
            } else if(data.href) {
                content = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"}>{data.text}</a>)];
            }

            /* Definindo marcação */
            if(data.supports !== undefined) {
                let supportsIcon;
                switch(data.supports) {
                    case true:
                        supportsIcon = "/svgs/checked.svg";
                        break;
                    default:
                        supportsIcon = "/svgs/x.svg";
                        break;
                };
                supports = (<i className = "tutorial-sections-td-supports" style = {{backgroundImage: `url("${supportsIcon}")`}}></i>);
            };

            return (
                <td className = "tutorial-sections-td" data-italic = {data.italic || false}>
                    {content || data.text}
                    {supports}
                </td>
            );
    };
};