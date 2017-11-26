var arrOfObj = [];

function id() {
    var xHttpA = new XMLHttpRequest();
    xHttpA.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var josnObjA = JSON.parse(xHttpA.response);
            for (var i = 0; i < 30; i++) {
                getInfo(josnObjA[i])
            } // end for loop
        }  // end if  
    }; // end function
    xHttpA.open("GET", "https://hacker-news.firebaseio.com/v0/topstories.json", true);
    xHttpA.send();
} // end id function

function getInfo(topStr) {
    var xHttpB = new XMLHttpRequest();
    xHttpB.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var josnObjB = JSON.parse(xHttpB.response);
            var obj = {
                url: josnObjB.url,
                titel: josnObjB.title,
                like: josnObjB.score,
                date: new Date(josnObjB.time * 1000),
                comm: josnObjB.descendants
            };
            arrOfObj.push(obj);
            if (arrOfObj.length == 30) {
                arrOfObj.sort(function (z, y) { return y.like - z.like });
                printFun();
            }
        } // end if 
    }// end function
    xHttpB.open("GET", "https://hacker-news.firebaseio.com/v0/item/" + topStr + ".json", true);
    xHttpB.send();
} // end getInfo function

//================================================================

var ulpar = document.getElementById('ulpar');

function printFun() {
    var x = "";
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    for (var i = 0; i < arrOfObj.length; i++) {
        x +=
            "<li class=\"lineB x2\">" +
            "<a class=\"stA\" href = " + arrOfObj[i].url + ">" +
            "<i class=\"fa fa-angle-up\" style=\"font-size:30px;color:rgb(0, 0, 0);\"></i> " + arrOfObj[i].titel + "</a>" +
            "<ul class=\"noList\">" +
            "<li>" +
            "<span>" + arrOfObj[i].like + " likes</span> | <span>" +
            month[arrOfObj[i].date.getMonth()] + " " + arrOfObj[i].date.getDate() + ", " + arrOfObj[i].date.getFullYear() + " " +
            arrOfObj[i].date.getHours() + ":" + arrOfObj[i].date.getMinutes() + ":" + arrOfObj[i].date.getSeconds() +
            "</span> | <span>" + arrOfObj[i].comm + " comments</span></li>" +
            "</ul>" +
            "</li>"
    }// end of loop
    ulpar.innerHTML = x;
}// end printer function

//================================================================

window.onload = function () {
    id();
} // load

//================================================================
var selSort = document.getElementById('bySelect');
selSort.onchange = function () {
    if (selSort.value == "comments") {
        arrOfObj.sort(function (z, y) { return y.comm - z.comm });
    }
    else if (selSort.value == "Newest") {
        arrOfObj.sort(function (z, y) { return y.date - z.date });
    }
    else {
        arrOfObj.sort(function (z, y) { return y.like - z.like });
    }
    printFun();
} // end sort function
