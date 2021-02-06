// set default focus to first selection
var lstA = document.getElementsByTagName("a");
lstA[0].style.backgroundColor = "#6cdbeb";

var lstFa = document.getElementsByClassName("fa");
lstFa[0].style.color = "white";

var lstName = document.getElementsByTagName("span");
lstName[0].style.color = "white";

$(".infor").fadeIn("slow");

function liOnclick(e) {
    for (i = 0; i < lstA.length; i++) {
        if (lstA[i] != e.childNodes[1]) {
            lstA[i].style.backgroundColor = "initial";
            lstA[i].classList.add("rotate");

            // set default color for fa and span
            lstA[i].childNodes[1].childNodes[1].style.color = "#333"; // fa
            lstA[i].childNodes[3].childNodes[1].style.color = "#333"; // name

        } else if (lstA[i].classList.contains("rotate")) {
            lstA[i].classList.remove("rotate");
        }
    }
    e.childNodes[1].style.backgroundColor = "#6cdbeb";
    e.childNodes[1].childNodes[1].childNodes[1].style.color = "white"; // fa
    e.childNodes[1].childNodes[3].childNodes[1].style.color = "white"; // name

    // change div
    switch (e.id) {
        case "1":
            $(".infor").fadeIn("slow");
            $(".tech").hide();
            $(".exp").hide();
            $(".skill").hide();
            $(".edu").hide();
            break;

        case "2":
            $(".tech").fadeIn("slow");
            $(".infor").hide();
            $(".exp").hide();
            $(".skill").hide();
            $(".edu").hide();
            break;
        case "3":
            $(".exp").fadeIn("slow");
            $(".infor").hide();
            $(".tech").hide();
            $(".skill").hide();
            $(".edu").hide();
            break;
        case "4":
            $(".skill").fadeIn("slow");
            $(".infor").hide();
            $(".tech").hide();
            $(".exp").hide();
            $(".edu").hide();
            break;
        case "5":
            $(".edu").fadeIn("slow");
            $(".infor").hide();
            $(".tech").hide();
            $(".exp").hide();
            $(".skill").hide();
            break;
    }
}

setTimeout(function(params) {

}, 20)