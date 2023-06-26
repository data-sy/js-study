var toyRobot = {
    productId : "123-12",
    name : "Robot",
    price : "25,000",
    madeIn : "Korea",
    quantity : 10,
    showStock : function(){
        document.querySelector("#display").innerHTML = `${this.name}제품은 ${this.quantity}개 남아있습니다.`;
    },
    showPrice : function(){
        alert(`${this.name}제품의 가격은 ${this.price}입니다.`);
    }
};

toyRobot.showStock();

// price속상 값을 알람창에 표시하는 showPrice() 함수 정의하기
toyRobot.showPrice();
