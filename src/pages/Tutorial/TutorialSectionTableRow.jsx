import TutorialSectionTableData from "./TutorialSectionTableData";

export default function TutorialSectionTableRow(row, styles, tableId) {
    let datas = [];
    for(let i = 0; i <= row.length - 1; i++) {
        const data = row[i];
        datas.push(TutorialSectionTableData(data, styles, tableId));

    };
    let rowId = `tutorial-sections-tr-${Math.floor(Math.random() * (1000 * 1000))}`;
    return (
        <tr className = "tutorial-sections-tr" id={rowId} style={styles ? styles.tr : null}>
            {datas}
        </tr>
    )
};