function changeSubStringColor(RplArg) {
    var str = document.getElementById("boody").innerHTML; 
    var res = str.replaceAll(RplArg, "<span style='color:red'>" + RplArg + "</span>");
    document.getElementById("boody").innerHTML = res;
}  



function justChange(RplArg) {
    document.body.innerHTML = document.body.innerHTML.replaceAll(RplArg, "<span style='color:green'>" + RplArg + "</span>");
}  