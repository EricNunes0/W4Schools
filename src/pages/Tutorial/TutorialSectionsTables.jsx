import TutorialSectionTableRow from "./TutorialSectionTableRow";

export default function TutorialSectionsTables(prop) {
    const content = prop.content;
    const styles = content.styles || null;

    let tableRows = [];
    for(let i = 0; i <= content.rows.length - 1; i++) {
        const row = content.rows[i];
        tableRows.push(TutorialSectionTableRow(row, styles));
    };

    /* Caption */
    let caption;
    if(content.caption) {
        caption = (<caption className = "tutorial-sections-table-captions">{content.caption}</caption>);
    };

    return (
        <table className = "tutorial-sections-tables" style={styles ? styles.table : null}>
            {caption}
            <tbody className = "tutorial-sections-tbodies">{tableRows}</tbody>
        </table>
    )
};