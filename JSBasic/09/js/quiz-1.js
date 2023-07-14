var price = 24000;
var checkbx = document.querySelectorAll(".checkbx");
var total = document.querySelector("#total");
total.value = price+"원";

for(let i=0; i<checkbx.length; i++){
    checkbx[i].addEventListener("click", priceUpdate);
//    console.log("가격 변화 : " + price)    
}

function priceUpdate(){
    if(this.checked){
        price += parseInt(this.value);
        // console.log("체크 시 가격: " + price)
    }else{
        price -= parseInt(this.value);
        // console.log("해제 시 가격: " + price)
    }
    //////////////// total의 위치는 수정한 즉시!!! ////////// 이 부분을 헤맸었어
    // 가격 변동 후 바로 담아주지 않으면 (= 이 함수를 빠져나가면) price 값 날라가나봐....=> why????
    total.value = price+"원";
    console.log("함수 안에서 가격 변화 : " + price)    
}
