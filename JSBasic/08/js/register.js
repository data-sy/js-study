
var userName = document.querySelector("#userName");
// button은 id, class가 없어서
var btn = document.getElementsByTagName("button")[0];
var nameList = document.querySelector("#nameList");

btn.addEventListener("click", addUser);

// 요소 추가
// 8-6 : appendChild() : 맨 뒤에 추가
// 8-7 : insertBefore() : 기준 위치 앞에 추가
function addUser(){
    var name = userName.value;
    if (name != null){
        //p태그 (요소 노드) 생성
        var newP = document.createElement("p");
        //div에 p태그 연결
            // 8-6
//        nameList.appendChild(newP);
            // 8-7
        nameList.insertBefore(newP, nameList.children[0]);
        //텍스트 노드 생성
        var newText = document.createTextNode(name);
        //p태그에 텍스트 노드 연결
        newP.appendChild(newText);

        userName.value = "";
        userName.focus();

        // 요소 삭제
        // 삭제 버튼 만들기
            // 조건 : 각 p태그의 자식태그로 span 태그 추가, text는 X 사용, class="del"
            // 필요한 노드들 생성
        var newSpan = document.createElement("span");
        var newDel = document.createTextNode("X");
            // class는 setAttribute로 생성&연결 한 번에
        newSpan.setAttribute("class", "del");
            // 노드들 연결
        newP.appendChild(newSpan);
        newSpan.appendChild(newDel);

        // 처음엔 여기서 바로 newSpan에 에드리스너 붙이면 되는 줄 알았음...
        // 약간 속성이나 요소 붙이듯이 리스너가 생성되고 안 사라지는 줄 알았지..
        // 근데 newSpan이 함수 안에서의 지역변수라서 리스너도 매번 바뀌나봐.. 아닌가?
        // 암튼 이 안에 만들어서는 안 돼
        // 아냐!!!!!!! 가능해!!!!!
        // 아까 안 됐던 이유는 내가 delUser()로 썼어서.. (뒤에 괄호를 붙였어서...힝)

            // 오류1 : span 태그에 달면 x버튼만 사라짐
//        newSpan.addEventListener("click", delUser);
            // 오류2 : p태그에 달면 p태그 전체 클릭할 때도 사라짐
//         newP.addEventListener("click", delUser);
            // 해결 : span태그에 달고, delUser함수를 수정 (부모의 부모를 찾아가도록)
        newSpan.addEventListener("click", delUser);
    }
}

// 요소 삭제 함수
function delUser(){
    console.log("this가 무엇인지 확인 : " + this)
        // 오류 1, 2의 함수
//    this.parentNode.removeChild(this);
        // 해결 : 부모의 부모 찾아서 삭제
    this.parentNode.parentNode.removeChild(this.parentNode);

}
