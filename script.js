

function displayTable() {
    document.getElementById("tableSound").play();

    var rows = (rowNumber.value);
    var cols = (colNumber.value);
    var sign = (selectEval.value);

    var table = "<table border='3' cell padding='5'><tr>";

    for (var i = 1; i <= cols; i++) {
        table += "<td>";
        for (var j = 1; j <= rows; j++) {
            var result;

            if (sign === "+") {
                result = i + j;
            } else if (sign === "-") {
                result = i - j;
            } else if (sign === "*") {
                result = i * j;
            } else if (sign === "/") {
                result = (j !== 0) ? (i / j).toFixed(2) : "infinite";
            }

            table += `${i} ${sign} ${j}  =  ${result}  <br> <br>`;
        }
        table += "</td>";
    }

    table += "</tr></table>";
    dispTable.innerHTML = table;
}
