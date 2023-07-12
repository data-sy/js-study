
var newP = document.createElement("p");
var newText = document.createTextNode("주문완료");
var attr = document.createAttribute("class");
attr.value = "accent";

newP.appendChild(newText);
document.body.appendChild(newP);
newP.setAttributeNode(attr);

// class속성 잘 붙었는지 테스트 : 클래스 속성에 클릭하면 글자 색 바뀌는 이벤트
var accent = document.querySelector(".accent")

accent.addEventListener("click", function(){
    this.style.color = "red";
})
