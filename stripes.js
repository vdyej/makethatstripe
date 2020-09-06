
var rainbow = ["salmon", "lightcoral", "crimson", "darkred", "orangered", "gold", "darkorange", "lemonchiffon", "peachpuff", "yellow", "limegreen", "forestgreen", "mediumspringgreen", "palegreen", "mediumseagreen", "cyan", "turquoise", "lightseagreen", "cadetblue", "teal", "steelblue", "midnightblue", "plum", "fuchsia", "darkorchid", "pink", "mediumvioletred"];
    console.log("Rainbow length:" + rainbow.length);

var rain = ["powderblue", "lightblue", "lightsteelblue", "steelblue", "midnightblue", "darkslateblue", "lightcyan", "azure", "aliceblue", "whitesmoke", "white"]
    console.log("Rain length:" + rain.length);

var grunge = ["olive", "olivedrab", "grey", "slategrey", "yellowgreen", "whitesmoke", "chartreuse", "darkkhaki", "black", "firebrick", "maroon", "black", "silver"]
    console.log("Grunge length:" + grunge.length);

var pinksunshine = ["pink", "lightyellow", "yellow", "lemonchiffon"]
    console.log("Pink Sunshine length:" + pinksunshine.length);

var neonyeti = ["hotpink", "yellow", "black", "magenta", "deeppink", "white", "lightcyan", "springgreen", "chartreuse", "orangered", "red", "aquamarine"]
    console.log("Neon Yeti length:" + neonyeti.length);

var lickablewallpaper = ["blueviolet", "yellow", "purple", "red", "crimson", "beige", "gold"]
    console.log("Lickable Wallpaper length:" + lickablewallpaper.length);

var photo = ["goldenrod", "peru", "chocolate", "saddlebrown", "sienna", "brown", "maroon", "navajowhite", "sandybrown", "oldlace", "cornsilk", "powderblue", "skyblue", "orange", "coral", "gold", "lightsalmon"]
    console.log("Photo length:" + photo.length);

var market = ["tomato", "gold", "darkorange", "orange", "khaki", "palegoldenrod", "darkkhaki", "yellowgreen", "forestgreen", "olivedrab", "pink", "wheat", "burlywood", "saddlebrown"]
    console.log("Farmers Market length:" + market.length);

var x;



function pickRandomNumberBorder() {

    x=Math.floor(Math.random() * rainbow.length); 
    console.log(x);
    return x;
}

function pickRandomNumber() {

    x=Math.floor(Math.random() * radioSelection.length); 
    console.log(x);
    return x;
}


function makeboxyborder(){
    var colorblock = document.createElement("DIV");
    var bordercontainery = document.getElementById("boxybordercontainer");
    bordercontainery.appendChild(colorblock);
    pickRandomNumberBorder();
    colorblock.style.backgroundColor=rainbow[x];
    
}

function makeboxyborder2(){
    var colorblock2 = document.createElement("DIV");
    var bordercontainery2 = document.getElementById("boxybordercontainer2");
    bordercontainery2.appendChild(colorblock2);
    pickRandomNumberBorder();
    colorblock2.style.backgroundColor=rainbow[x];
    
}

function makeboxy() {
        var boxy = document.createElement("DIV");
        var containery = document.getElementById("boxycontainer");
        containery.appendChild(boxy);
            pickRandomNumber();
            boxy.style.backgroundColor=radioSelection[x];
        
        boxy.addEventListener("click", clickChange);
        function clickChange () {
            pickRandomNumber();
            boxy.style.backgroundColor=radioSelection[x];
        }




}

function chooseGrunge() {
        var origPattern=document.getElementById("boxycontainer");
        origPattern.innerHTML="";
        radioSelection=grunge;
        makeEntireBoxy();
    }

function chooseRainbow() {
        var origPattern=document.getElementById("boxycontainer");
        origPattern.innerHTML="";
        radioSelection=rainbow;
        makeEntireBoxy();
    }

function chooseRain() {
        var origPattern=document.getElementById("boxycontainer");
        origPattern.innerHTML="";
        radioSelection=rain;
        makeEntireBoxy();
    }

function choosePinkSunshine() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    radioSelection=pinksunshine;
    makeEntireBoxy();
}

function chooseNeonYeti() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    radioSelection=neonyeti;
    makeEntireBoxy();
}

function chooseLickableWallpaper() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    radioSelection=lickablewallpaper;
    makeEntireBoxy();
}

function choosePhoto() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    radioSelection=photo;
    makeEntireBoxy();
}

function chooseMarket() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    radioSelection=market;
    makeEntireBoxy();
}


var j=0;
while (j<100) {
    makeboxyborder()
    j++;
}

var k=0;
while (k<100) {
    makeboxyborder2()
    k++;
}

function makeEntireBoxy() {
var i=0;
while (i<50) {
    makeboxy()
    i++;
}
}

function regenerateColors() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    var i=0;
while (i<50) {
    makeboxy()
    i++;
}
}

window.onload =chooseGrunge();


