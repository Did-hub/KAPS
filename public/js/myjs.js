function changeSubStringColor(RplArg) {
    var str = document.getElementById("demo").innerHTML; 
    var res = str.replaceAll(RplArg, 'Move');
    document.getElementById("demo").innerHTML = res;
}  