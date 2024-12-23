import TutorialSectionTableRow from "./TutorialSectionTableRow";
import TutorialSectionsTablesColgroup from "./TutorialSectionsTablesColgroup";

export default function TutorialSectionsTables(prop) {
    const content = prop.content;
    const styles = content.styles || null;

    let tableRows = [];
    for(let i = 0; i <= content.rows.length - 1; i++) {
        const row = content.rows[i];
        tableRows.push(TutorialSectionTableRow(row, styles, content.id));
    };

    /* Caption */
    let caption;
    if(content.caption) {
        caption = (<caption className = "tutorial-sections-table-captions">{content.caption}</caption>);
    };

    /* Colgroup */
    let colgroup;
    if(content.colgroup) {
        colgroup = TutorialSectionsTablesColgroup(content.colgroup);
    };

    return (
        <div className="tutorial-sections-tables-divs">
        <table className = {`tutorial-sections-tables ${content.className || ""}`} id = {content.id || ""} style={styles ? styles.table : null}>
            {caption}
            {colgroup}
            <tbody className = "tutorial-sections-tbodies">{tableRows}</tbody>
        </table>
        </div>
    )
};