////Variables
var img = document.getElementById("image");

var btRAZ = document.getElementById('raz');
var btId = document.getElementById('ident');
var btAppl = document.getElementById('appl');
var btChange = document.getElementById('change');

var images = [{name: 'montagne.jpg',
               width: 25,
               height: 15},
              {name: 'saisons.jpg',
               width: 14,
               height: 20},
              {name: 'robot.gif',
               width: 20,
               height: 20}]

var m11 = document.getElementById("m11");
var m12 = document.getElementById("m12");
var m13 = document.getElementById("m13");
var m21 = document.getElementById("m21");
var m22 = document.getElementById("m22");
var m23 = document.getElementById("m23");


////Fonctions
function appliquer(e) {
    var str = "matrix(";
    str += m11.value;
    str += ', ';
    str += m21.value;
    str += ', ';
    str += m12.value;
    str += ', ';
    str += m22.value;
    str += ', ';
    str += m13.value;
    str += ', ';
    str += m23.value;
    str += ')';
    img.style.transform += str;
}

function load(index) {
    img.style.width = images[index].width.toString() + 'em';
    img.style.height = images[index].height.toString() + 'em';
    img.src = images[index].name;
}

function get(){
    var i=0;
    while(img.src.indexOf(images[i].name) === -1){
        i++;
    }
    return i;
}


////Evènements: appuy sur les boutons
btId.addEventListener("click", function (e) {
    m11.value = 1;
    m21.value = 0;
    m12.value = 0;
    m22.value = 1;
    m13.value = 0;
    m23.value = 0;
});

btRAZ.addEventListener("click", function (e) {
    void window.location.reload()
});

btAppl.addEventListener("click", appliquer);

btChange.addEventListener("click", function (e) {
    var i = get();
    i=(i+1)%images.length;
    load(i);
});





////1ère application
appliquer(null);
