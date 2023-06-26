
// 두 날짜 사이에 며칠이 흘렀는지
    // 오늘 날짜, 처음 만난 날짜 객체 선언
var now = new Date();
var firstDay = new Date("2020-01-01");
        // 날짜 단위를 밀리초 단위로 변환
var toNow = now.getTime();
var toFirst = firstDay.getTime();
        // 처음 만난 날과 오늘 사이의 차이
var passedTime = toNow - toFirst;
        // 밀리초를 다시 날짜 단위로 변환
var passedDay = Math.round(passedTime/(1000*60*60*24));
        // id="accent" 영역에 text로 삽입 : "ㅇㅇ일"
document.querySelector("#accent").innerText = `${passedDay}일`;
    
    // n일 후 날짜 계산
        // n = 100일 후, 200일 후, 365일 후, 500일 후
        // 여러 번 사용하므로 함수로 만들기
function calDate(days){
        // n일 후를 밀리초 단위로 변환
        // 기준 날짜를 안 더하면 1970년을 기준으로 100일, 200일, ... 이 돼
    var future = toFirst + days*1000*60*60*24;
        // n일 후의 날짜 객체 생성 (**point**)
    var someday = new Date(future);
        // 연/월/일 추출
    var year = someday.getFullYear();
    var month = someday.getMonth()+1;
    var date = someday.getDate();
        // "id=dateㅇㅇㅇ" 영역에 text로 삽입 : "ㅇㅇㅇㅇ년 ㅇㅇ월 ㅇㅇ일"
    document.querySelector(`#date${days}`).innerText = `${year}년 ${month}일 ${date}월`;
    }
    
    // 함수 실행
calDate(100);
calDate(200);
calDate(365);
calDate(500);

// Q. 밀리초 말고 그냥 날짜로 해도 되는지

// Q. var 자료형에 담으면 문자열로 담길 것 같아. 확인하기
