// // 틀린 풀이 1 : 생성자 함수를 사용해서 객체를 만들면 new 키워드로 인스턴스 생성해야 해
// var r = prompt("원의 반지름은? (cm)");

// // 인스턴스 없이 함수를 사용하려하니 객체.함수()
// document.write(`반지름이 ${r}일 때<br/>`);		
// document.write(`원의 둘레 : 약 ${Circle.circumference()}<br/>`);
// document.write(`원의 넓이 : 약 ${Circle.area()}<br/>`);

// function Circle(radius){
//     this.radius = radius;
//     this.circumference =  function(){
//         return 2*Math.PI*this.radius;
//     }
//     this.area = function(){
//         return Math.PI*this.radius*this.radius;
//     }
// }


// // 정답
// var r = prompt("원의 반지름은? (cm)");
// var circle1 = new Circle(r);

// document.write(`반지름이 ${r}일 때<br/>`);		
//                             // 인스턴스.함수()
// document.write(`원의 둘레 : 약 ${circle1.circumference()}<br/>`);
// document.write(`원의 넓이 : 약 ${circle1.area()}<br/>`);

// function Circle(radius){
//     this.radius = radius;
//     this.circumference =  function(){
//         return 2*Math.PI*this.radius;
//     }
//     this.area = function(){
//         return Math.PI*this.radius*this.radius;
//     }
// }


// 정답 리팩토링 1.소수점 버림, 2.제곱도 Math함수 사용 3.html코드에 단위 넣기
var r = prompt("원의 반지름은? (cm)");
var circle1 = new Circle(r);

document.write(`반지름이 ${r}일 때<br/>`);
                            // 인스턴스.함수()
document.write(`원의 둘레 : 약 ${circle1.circumference()}cm<br/>`);
document.write(`원의 넓이 : 약 ${circle1.area()}cm<sup>2</sup>`);

function Circle(radius){
    this.radius = radius;
    this.circumference =  function(){
        return Math.floor(2*Math.PI*this.radius);
    }
    this.area = function(){
        return Math.floor(Math.PI*Math.pow(this.radius, 2));
    }
}


// // test1 : 반지름, 넓이를 그냥 field로 만드는 것 가능한가?
// // 가능함!!!
// var r = prompt("원의 반지름은? (cm)");
// var circle1 = new Circle(r);
// document.write(`반지름이 ${r}일 때<br/>`);
// document.write(`원의 둘레 : 약 ${circle1.circumference}cm<br/>`);
// document.write(`원의 넓이 : 약 ${circle1.area}cm<sup>2</sup>`);
// function Circle(radius){
//     this.radius = radius;
//     this.circumference = Math.floor(2*Math.PI*this.radius);
//     this.area = Math.floor(Math.PI*Math.pow(this.radius, 2));
// }


// // test2 : 생성자 입력인자를 r로 사용해도 되는가?
// // 가능함. 하지만 헷갈릴 수 있으므로 다른 키워드로 적어주자.
// var r = prompt("원의 반지름은? (cm)");
// var circle1 = new Circle(r);
// document.write(`반지름이 ${r}일 때<br/>`);
// document.write(`원의 둘레 : 약 ${circle1.circumference()}cm<br/>`);
// document.write(`원의 넓이 : 약 ${circle1.area()}cm<sup>2</sup>`);
// function Circle(r){
//     this.r = r;
//     this.circumference =  function(){
//         return Math.floor(2*Math.PI*this.r);
//     }
//     this.area = function(){
//         return Math.floor(Math.PI*Math.pow(this.r, 2));
//     }
// }


// // test3 : 함수 만들 때 this 키워드 안 써도 되는가?
// // 가능함. 하지만 this 키워드 적어주는 게 문맥상 정확해.
// var r = prompt("원의 반지름은? (cm)");
// var circle1 = new Circle(r);
// document.write(`반지름이 ${r}일 때<br/>`);
// document.write(`원의 둘레 : 약 ${circle1.circumference()}cm<br/>`);
// document.write(`원의 넓이 : 약 ${circle1.area()}cm<sup>2</sup>`);
// function Circle(r){
//     this.r = r;
//     this.circumference =  function(){
//         return Math.floor(2*Math.PI*r);
//     }
//     this.area = function(){
//         return Math.floor(Math.PI*Math.pow(r, 2));
//     }
// }
