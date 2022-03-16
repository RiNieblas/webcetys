hide();

function hide() {
    var hidden = document.getElementsByClassName("hidden");

    for (var i = 0; i < hidden.length; i ++) {
        hidden[i].style.display = "none";
    }
}

function display() {
    switch (document.getElementById("actividad").value) {
        case "0":
            hide(); document.getElementById("act0").style.display = "block"; break;

        case "1":
            hide(); document.getElementById("act1").style.display = "block"; break;

        case "2":
            hide(); document.getElementById("act2").style.display = "block"; break;

        case "3":
            hide(); document.getElementById("act3").style.display = "block"; break;

        case "4":
            hide(); document.getElementById("act4").style.display = "block"; break;

        case "5":
            hide(); document.getElementById("act5").style.display = "block"; break;

        case "6":
            hide(); document.getElementById("act6").style.display = "block"; break;

        case "7":
            hide(); document.getElementById("act7").style.display = "block"; break;

        case "8":
            hide(); document.getElementById("act8").style.display = "block"; break;

        case "9":
            hide(); document.getElementById("act9").style.display = "block"; break;

        default:
            break;
    }
}