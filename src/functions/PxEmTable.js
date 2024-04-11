export default function PxEmTable(value, id) {
    const table = document.querySelector(`#${id}`);
    const rows = table.querySelectorAll("tr");

    function getPixels(data) {
        return parseInt(data.textContent.replace("px", ""));
    }
    
    console.log(value)
    console.log(value / value)
    console.log((value + 1) / value)

    let r = 0;
    for(const row of rows) {
        const datas = row.querySelectorAll("td");
        let px = 0;
        let d = 0;
        for(const data of datas) {
            if(d === 0) { /* Pixels */
                px = getPixels(data);
                if(px === value) {
                    row.style.backgroundColor = "rgba(80, 117, 208, 0.4)";
                } else {
                    
                    row.style.removeProperty("background-color");
                }
                d++;
            } else if(d === 1) { /* Em */
                data.textContent = `${(px / value).toFixed(4)}em`;
                d++;
            } else if(d === 2) { /* Porcentagem */
                data.textContent = `${((px / value) * 100).toFixed(2)}%`;
                d = 0;
                px = 0;
            }
        }
        r++;
    };
};