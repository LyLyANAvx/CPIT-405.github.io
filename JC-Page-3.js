

var sub = document.getElementById('sb');
sub.onclick = function () {
    var tit = document.getElementById('tt').value;
    var url = document.getElementById('ur').value;
    var textA = document.getElementById('txa').value;

    if (tit == "" && (url == "" && textA == "")) {
        document.getElementById('sty').style.display = "block";
        document.getElementById('p1').style.display = "block";
        document.getElementById('p2').style.display = "block";
        document.getElementById('p1').style.padding = "2% 0% 0% 2%";
        document.getElementById('p2').style.padding = "0% 0% 2% 2%";
    }
    else if (tit == "") {
        document.getElementById('sty').style.display = "block";
        document.getElementById('p1').style.display = "block";
        document.getElementById('p2').style.display = "none";
        document.getElementById('p1').style.padding = "2%";

    }
    else if (url == "" && textA == "") {
        document.getElementById('sty').style.display = "block";
        document.getElementById('p2').style.display = "block";
        document.getElementById('p1').style.display = "none";
        document.getElementById('p2').style.padding = "2%";
    }
    else {
        document.getElementById('sty').style.display = "none";
        document.getElementById('p1').style.display = "none";
        document.getElementById('p2').style.display = "none";
    }
    return false;
}
