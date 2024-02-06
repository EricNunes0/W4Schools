import TutorialSectionTableData from "./TutorialSectionTableData";

export default function TutorialSectionTableRow(row, styles) {
    let datas = [];
    for(let i = 0; i <= row.length - 1; i++) {
        const data = row[i];
        datas.push(TutorialSectionTableData(data, styles));

    };
    return (
        <tr className = "tutorial-sections-tr" style={styles ? styles.tr : null}>
            {datas}
        </tr>
    )
};