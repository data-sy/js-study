function openPop(){
    var newWin = window.open("popup.html", " ", "width=400, height=400");
    if(newWind ==null){
        alert("팝업이 차단되어 있습니다. 팝업 차단을 해제하고 새로고침 해주세요.")
    }
}

// 나는 html 바디 태그에 onload 속성 다는 방법 사용함
// (윈도우 속성은 바디태그에 담는다는 걸 기억하기 위해)
// window.onload = openPop;
