// 문제 추가 : 결과보기 버튼을 클릭하면 화면에 결과가 나오도록

// 원래 여러 이벤트를 섞어서 응용문제를 만들었었는데, 지금 배운 것만 가지고는 구현할 수 없을 것 같아서 삭제함
// 그 과정에서 생겼던 궁금증들
// 1. 한 이벤트를 여러번 만들면 어떻게 되는가? 예) 온클릭을 2번 사용
// 2. 그랬을 때, querySelector.innerHTML이 동작 순서가 밀리는 느낌을 받았어. 어떤 상황이었을까?
//    (버튼을 클릭하고 나서야 문장이 떴어)
// 3. 어떤 결과를 변수에 담는 것과 함수에 담는 것의 차이는 뭘까?
//    var num = num1>num2 ? num1 : num2
//    var compare = (num1, num2) => num1>num2 ? num1 : num2 ;

var num1 = prompt("비교할 첫 번째 숫자");
var num2 = prompt("비교할 두 번째 숫자");
var num = num1>num2 ? num1 : num2;

document.querySelector("#question").innerHTML = `${num1}과 ${num2} 중 큰 수는? `;

function showCompare(){
    document.querySelector("#answer").innerHTML = `${num}이다.`;
}
