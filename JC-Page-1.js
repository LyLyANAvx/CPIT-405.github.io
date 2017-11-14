var obj1 = {
    url: "https://www.google.com.sa/",
    titel: "&nbsp; Yarn - A new package manager for JavaScript",
    like: 570,
    date: new Date("January 25, 2016 19:30:03"),
    comm: 243
};

var obj2 = {
    url: "https://www.google.com.sa/",
    titel: " &nbsp; Tesseractjs - Pure JavaScript OCR for 60 Languages",
    like: 301,
    date: new Date("October 09, 2016 10:45:39"),
    comm: 111
};

var obj3 = {
    url: "https://www.google.com.sa/",
    titel: " &nbsp; Blueprint - A React UI toolkit for the web",
    like: 432,
    date: new Date("June 11, 2017 11:11:11"),
    comm: 89
};

var obj4 = {
    url: "https://www.google.com.sa/",
    titel: " &nbsp; Introducing Create React Native App",
    like: 112,
    date: new Date("November 23, 2017 13:28:48"),
    comm: 315
};

var obj5 = {
    url: "https://www.google.com.sa/",
    titel: " &nbsp; Cheatsheet for the modern JavaScript",
    like: 262,
    date: new Date("December 24, 2016 21:13:56"),
    comm: 23
};

var arrOfObj = [obj1, obj2, obj3, obj4, obj5];

//================================================================

var ulpar = document.getElementById('ulpar');


function printFun() {
    var x = "";
    var month = ["January", "February", "March", "April", "May","June", "July", "August", "September", "October", "November", "December"];

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
    arrOfObj.sort(function (z, y) { return y.like - z.like });
    printFun();
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

