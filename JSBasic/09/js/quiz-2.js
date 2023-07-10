var radius = document.querySelector("#radius");
var start = document.querySelector("#start");
var round = document.querySelector("#round");
var area = document.querySelector("#area");


start.onclick = function(){
    round.value = 2*parseInt(radius.value)*Math.PI;
    area.value = Math.PI*parseInt(radius.value)*parseInt(radius.value);
}
