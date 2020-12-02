
function eraseInput() {
    id = ["day", "month", "year"
        , "meantemp", "maxtemp", "mintemp"
        , "meanhum", "meandew", "pressure"]
    for (i = 0; i <= id.length; i++) {
        document.getElementById(id[i]).value = "";
    }
}

function setDayLimit() {
    if (document.getElementById("day") < 1 || document.getElementById("day") < 31) {
        alert("Invalid day. Enter again!")
    }
}
