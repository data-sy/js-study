// // NodeList 배열에 onclick을 붙여줄 수 없고, 각 노드에 접근해야 해
// document.querySelectorAll(".small").onclick = function(){
//     let src = this.getAttribute("src");
//     document.getElementById("cup").setAttribute("src", src);
// }

// var smallPics = document.querySelectorAll(".small");

// for (var i=0; i<smallPics.length; i++){
//     smallPics[i].onclick = function(){
//         var src = this.getAttribute("src");
//         document.getElementById("cup").setAttribute("src", src);
//     }
// }

// 리팩토링
// 1 : bigPic 변수로 빼주기
// 2 : 함수를 showBig으로 따로 선언해주기
// 3 : getAttribute("속성") 대신에 .속성 사용 가능
// 4 : src 변수명 속성이랑 같으니까 다른 걸로 수정

var bigPic = document.getElementById("cup");
var smallPics = document.querySelectorAll(".small");

for (var i=0; i<smallPics.length; i++){
    smallPics[i].onclick = showBig;
}
function showBig (){
    var newPic = this.src;
    bigPic.setAttribute("src", newPic);
}
