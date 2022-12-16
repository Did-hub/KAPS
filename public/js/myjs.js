function changeSubStringColor(RplArg) {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replaceAll(RplArg, "<span style='color:red'>" + RplArg + "</span>");
    document.getElementById("demo").innerHTML = res;
}  



function justChange(RplArg) {
    document.body.innerHTML = document.body.innerHTML.replaceAll(RplArg, "<span style='color:green'>" + RplArg + "</span>");
}  