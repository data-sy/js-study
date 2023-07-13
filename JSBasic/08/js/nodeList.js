// p태그로 명단 전체 가져오기
// querySelectorAll은 nodeList 객체 반환
var nameArr = document.querySelectorAll("p");

// 길이 확인
console.log("length : " + nameArr.length);

// 자식노드에 접근
var nameList = document.querySelector("#nameList");
var childList = nameList.childNodes;

// 자식 중 요소 노드에만 접근
var childrenList = nameList.children;

// 원하는 위치에 노드 삽입
// 3번째 노드를 1번째 앞으로 옮겨보자.
nameList.insertBefore(childrenList[2], childrenList[0]);


// 노드 삭제
// 부모 노드 찾고 -> 부모노드에서 자식노드 삭제
// 두 번째의 홍길동을 삭제해보자.
// 부모 노드 찾기
var hong = childrenList[1]
var parent = hong.parentNode;
// 부모 노드에서 자식 노드 삭제
parent.removeChild(hong);
