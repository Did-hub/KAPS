function changeSubStringColor(RplArg) {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replace(RplArg, "<span style='color:red'>" + RplArg + "</span>");
    document.getElementById("demo").innerHTML = res;
}  