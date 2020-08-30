
var rainbow = ["salmon", "lightcoral", "crimson", "darkred", "orangered", "gold", "darkorange", "lemonchiffon", "peachpuff", "yellow", "limegreen", "forestgreen", "mediumspringgreen", "palegreen", "mediumseagreen", "cyan", "turquoise", "lightseagreen", "cadetblue", "teal", "steelblue", "midnightblue", "plum", "fuchsia", "darkorchid", "pink", "mediumvioletred"];
var rain = ["powderblue", "lightblue", "lightsteelblue", "steelblue", "midnight blue", "darkslateblue", "lightcyan", "azure", "aliceblue", "whitesmoke", "white"]
var grunge = ["olive", "olivedrab", "grey", "slategrey", "yellowgreen", "whitesmoke", "chartreuse", "darkkhaki", "black", "firebrick", "maroon", "black", "silver"]
var x;
var theme; 

function pickRandomNumber() {

    x=Math.floor(Math.random() * grunge.length); 
    console.log(x);
    return x;
}


function makeboxyborder(){
    var colorblock = document.createElement("DIV");
    var bordercontainery = document.getElementById("boxybordercontainer");
    bordercontainery.appendChild(colorblock);
    pickRandomNumber();
    colorblock.style.backgroundColor=rainbow[x];
    
}

function makeboxyborder2(){
    var colorblock2 = document.createElement("DIV");
    var bordercontainery2 = document.getElementById("boxybordercontainer2");
    bordercontainery2.appendChild(colorblock2);
    pickRandomNumber();
    colorblock2.style.backgroundColor=rainbow[x];
    
}

function makeboxy() {
    
        var boxy = document.createElement("DIV");
        var containery = document.getElementById("boxycontainer");
        containery.appendChild(boxy);
            pickRandomNumber();
            boxy.style.backgroundColor=grunge[x];
        
        boxy.addEventListener("click", clickChange);
        function clickChange () {
            pickRandomNumber();
            boxy.style.backgroundColor=grunge[x];
        }




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

var i=0;
while (i<25) {
    makeboxy()
    i++;
}

function regenerateColors() {
    var origPattern=document.getElementById("boxycontainer");
    origPattern.innerHTML="";
    var i=0;
while (i<25) {
    makeboxy()
    i++;
}
}




