import { TutorialSectionsSearchButton } from "./TutorialSectionsSearchButton";

export default function TutorialSectionsSearch(prop) {
    const content = prop.content;
    if(content) {
        const tableFor = content.for;
        const filter = content.filter;
        
        function getTable(forTable) {
            return document.querySelector(forTable) || null;
        };
        function getDatasContents(datas) {
            let dataList = [];
            datas.forEach((data) => {
                dataList.push(data.innerHTML)
            });
            return dataList;
        };
        function getRowColumns(row) {
            let rowColumns = [];
            let columns = row.querySelectorAll("th, td");
            let i = 0;
            for(let column of columns) {
                rowColumns.push([column, i]);
                i++;
            }
            return rowColumns;
        };
        function getColumnTextContent(column) {
            let textContent = "";

            textContent = column.textContent.toLowerCase();

            return textContent;
        };
        function hideRow(row) {
            row.style.display = "none";
        };
        function showRow(row) {
            row.style.removeProperty("display");
        };

        const tableAddFilter = (e, tableFor) => {
            const table = getTable(tableFor);
            if(table) {
                const tableRows = table.querySelector("tbody").querySelectorAll("tr");
                const direction = filter.direction || null;
                const from = filter.from;
                const value = e.target.value.toLowerCase();
                if(direction) {
                    switch(direction) {
                        case "horizontal":
                            const filterRow = tableRows[from.row || 0];
                            const datas = filterRow.querySelectorAll("th").length !== 0 ? filterRow.querySelectorAll("th") : filterRow.querySelectorAll("td");
                            const datasContents = getDatasContents(datas);
                            const headers = filter.headers;
                            for(const header of headers) {
                                if(datasContents.includes(header)) {
                                    for(const row of tableRows) {
                                        const rowColumns  = getRowColumns(row);
                                        for(const column of rowColumns) {
                                            if(column[1] === from.column) {
                                                let columnText = getColumnTextContent(column[0])
                                                if(!columnText.includes(value)) {
                                                    hideRow(row);
                                                } else {
                                                    showRow(row);
                                                };
                                            };
                                        };
                                    };
                                }
                            }
                            break;
                        default:
                            break;
                    };
                };
            };
        }
        const searchHandle = (e) => {
            if(tableFor) {
                if(typeof tableFor == "string") {
                    tableAddFilter(e, tableFor);
                } else if(typeof tableFor == "object") {
                    for(const f of tableFor) {
                        tableAddFilter(e, f);
                    }
                }
            };
        };

        return (
            <div className = "tutorial-sections-searches-divs">
                <TutorialSectionsSearchButton></TutorialSectionsSearchButton>
                <input type="search" className = "tutorial-sections-searches" style={content.style || {}}
                    onChange={searchHandle}
                ></input>
            </div>
        );
    };
};