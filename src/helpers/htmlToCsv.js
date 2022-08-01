import downloadCSVFile from "./downloadCSVFile";

export default function htmlToCsv(filename){
    let data = [];
    let rows = document.querySelectorAll("table tr");

    for (let i = 0; i < rows.length; i++){
        let row = [], cols = rows[i].querySelectorAll("td, th");

        for (let j = 0; j < cols.length; j++){
            row.push(cols[j].innerText);
        }

        data.push(row.join(","));
    }
    downloadCSVFile(data.join("\n"), filename);
}