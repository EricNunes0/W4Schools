export default function TutorialSectionsTablesColgroup(colgroup) {
    let cols = [];
    for(const col of colgroup) {
        cols.push(<col className = "tutorial-sections-table-cols" span = {col.span || 1} style = {col.style || null}></col>);
    };

    return (
        <colgroup className = "tutorial-sections-table-colgroups">
            {cols}
        </colgroup>
    );
};