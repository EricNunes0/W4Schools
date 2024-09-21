import PxEmTable from "../../functions/PxEmTable";

export default function TutorialSectionTableData(data, styles, tableId) {
    switch(data.tag) {
        case "th":
            /* Definindo estilo */
            let thStyle;
            if(data.style) {
                thStyle = data.style;
            } else if(styles) {
                thStyle = styles.th || null;
            };

            return (
                <th className = "tutorial-sections-th" colSpan = {data.colSpan || null} rowSpan = {data.rowSpan || null} style = {thStyle} data-italic = {data.italic || false}>
                    {data.text}
                </th>
            );
        case "td":
            let content;
            let supports;

            /* Definindo conteúdo */
            if(data.icon) {
                if(data.text) {
                    if(data.href) {
                        content = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"} style={data.style || {}}>
                            <i className = "tutorial-sections-td-icons" style = {{backgroundImage: `url("${data.icon || ""}")`, margin: "unset"}}></i>
                            <span>{data.text}</span>
                        </a>)];
                    } else {
                        content = [(<p className = "tutorial-sections-td-links" style={data.style || {}}>
                            <i className = "tutorial-sections-td-icons" style = {{backgroundImage: `url("${data.icon || ""}")`, margin: "unset"}}></i>
                            <span>{data.text}</span>
                        </p>)];
                    }
                } else {
                    if(data.href) {
                        content = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"} style={data.style || {}}>
                            <i className = "tutorial-sections-td-icons" style = {{backgroundImage: `url("${data.icon || ""}")`}}></i>
                        </a>)];
                    } else {
                        content = [(<i className = "tutorial-sections-td-icons" style = {{backgroundImage: `url("${data.icon || ""}")`}}></i>)];
                    }
                }
            } else if(data.href) { /* Com href */
                if(data.text) { /* Com href e text */
                    content = [(
                        <div style={data.style || {display: "block", width: "100%"}}>
                            <a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"} style={{display: "block", width: "100%"}}>
                                <p style={data.style || {}}>{data.text}</p>
                            </a>
                        </div>
                    )];
                } else { /* Apenas href */
                    content = [(<a className = "tutorial-sections-td-links" href = {data.href || ""} target = {data.target || "_self"} style={data.style || {}}>{data.text}</a>)];
                }
            } else if(data.text) { /* Com text */
                content = [(<p>
                    {data.text.split('\n').map((item, index) => (
                        <>
                            {item}
                            <br />
                        </>
                    ))}</p>)];
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

            /* Definindo estilo */
            let tdStyle;
            if(data.style) {
                tdStyle = data.style;
            } else if(styles) {
                tdStyle = styles.td || null;
            };

            /* PxEmTable */
            let onclickFunction = null;
            if(data.PxEmTable) {
                onclickFunction = () => PxEmTable(data.PxEmTable, tableId);
            }

            return (
                <td className = "tutorial-sections-td" colSpan = {data.colSpan || null} rowSpan = {data.rowSpan || null} style = {tdStyle} data-italic = {data.italic || false} onClick={onclickFunction}>
                    {content || data.text}
                    {supports}
                </td>
            );
    };
};