
// 2단계 : 항목 추가하기
var itemList = [];

var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", addList); //addBtn을 클릭하면 addList 함수 실행

function addList(){
    var item = document.querySelector("#item").value; //텍스트 필드 내용 가져오기
    // 들어오는 값 검증해야 해
    if (item != null){
        itemList.push(item);
        // 텍스트 필드에서 추가한 내용은 지워지고, 다시 커서가 활성화 되도록
        document.querySelector("#item").value = ""; // id="item"인 요소 값을 지움
        document.querySelector("#item").focus();
    }
    // 여기까지 잘 됐는지 테스트는 console창에 itemList로
    
    // (3단계 추가) 항목을 추가하자마자 그 결과를 화면에 보여주도록
    showList();
}

// 3단계 : 화면에 목록 표시하기
function showList(){
    var list = "<ul>"; // 목록 시작
    for (let i=0; i<itemList.length; i++){
        // (4단계 추가) x 버튼 추가, id 값을 배열의 인덱스 i로
        list += `<li>${itemList[i]}<span class="close" id="${i}">X</span></li>`;
        // list += `<li>${itemList[i]}</li>`; // 각 요소를 <li> ~ </li>로 묶음
    }
    list += "<ul>"; // 목록 끝

    // 화면에 목록 표시
    document.querySelector("#itemList").innerHTML = list;

    // (4단계 추가) 삭제 버튼은 점검 목록과 함께 화면에 표시되므로
    //             삭제 버튼을 눌렀을 때 실행할 명령도 이 안에 추가해야 함

    // 클래스가 close인 요소 모두 가져와 배열 형태로 저장됨
    var remove = document.querySelectorAll(".close")
    for (let i=0; i<remove.length; i++){
        remove[i].addEventListener("click", removeList);
    }
}

// 4단계 : 목록에서 지우기
    // 3단계 목록 표시에서 x버튼을 리스트안에 담고, 각 버튼에 removeList 함수 클릭이벤트 걸기

    // 지우는 함수 : removeList()
function removeList(){
    // console.log(this);
    // 현재 요소의 id값 가져오기
    var id = this.getAttribute("id");
    // 인덱스가 id인 요소 1개 삭제
    itemList.splice(id, 1);
    // 변경된 itemList 배열을 다시 화면에 표시
    showList();
}
