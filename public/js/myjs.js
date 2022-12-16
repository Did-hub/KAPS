function changeSubStringColor(RplArg) {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replaceAll(RplArg, "<span style='color:red'>" + RplArg + "</span>");
    document.getElementById("demo").innerHTML = res;
}  