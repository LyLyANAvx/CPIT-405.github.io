
var x1 = document.getElementById('click1');
x1.onclick = function () {
    var up = document.getElementById('up');
    var down = document.getElementById('down');
    var likes = document.getElementById('likes');
    var temp = likes.innerHTML;

    if (up.style.color == "grey" && down.style.color == "grey") {
        temp ++;
        likes.innerHTML = temp;
        up.style.color = "rgb(138, 247, 65)";
        return false;
    }
    else if (up.style.color == "grey" && down.style.color == "red") {
        temp ++;
        temp ++;
        likes.innerHTML = temp;
        up.style.color = "rgb(138, 247, 65)";
        down.style.color = "grey";
        return false;
    }
}

var x1 = document.getElementById('click2');
x1.onclick = function () {
    var up = document.getElementById('up');
    var down = document.getElementById('down');
    var likes = document.getElementById('likes');
    var temp = likes.innerHTML;

    if (up.style.color == "grey" && down.style.color == "grey") {
        temp --;
        likes.innerHTML = temp;
        down.style.color = "red";
        return false;
    }
    else if (up.style.color == "rgb(138, 247, 65)" && down.style.color == "grey") {
        temp --;
        temp --;
        likes.innerHTML = temp;
        down.style.color = "red";
        up.style.color = "grey";
        return false;
    }
}

