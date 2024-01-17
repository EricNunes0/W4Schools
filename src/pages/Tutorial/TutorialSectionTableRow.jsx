import TutorialSectionTableData from "./TutorialSectionTableData";

export default function TutorialSectionTableRow(row) {
    let datas = [];
    for(let i = 0; i <= row.length - 1; i++) {
        const data = row[i];
        datas.push(TutorialSectionTableData(data));

    };
    return (
        <tr className = "tutorial-sections-tr">
            {datas}
        </tr>
    )
};