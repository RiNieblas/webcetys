hideAll();

function hideAll() {
    var hidden = document.getElementsByClassName("hidden");
    for (var i = 0; i < hidden.length; i ++) {
        hidden[i].style.display = "none";
    }
}

function hide(id) { document.getElementById(id).style.display = "block"; }

function display() {
    switch (document.getElementById("actividad").value) {
        case "0": hideAll(); hide("act0"); break;

        case "1": hideAll(); hide("act1"); break;

        case "2": hideAll(); hide("act2"); break;

        case "3": hideAll(); hide("act3"); break;

        case "4": hideAll(); hide("act4"); break;

        case "5": hideAll(); hide("act5"); break;

        case "6": hideAll(); hide("act6"); break;

        case "7": hideAll(); hide("act7"); break;

        case "8": hideAll(); hide("act8"); break;

        case "9": hideAll(); hide("act9"); break;
    }
}