var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen : true
    }
});


// 더 이상 HTML과 직접 상호작용할 필요가 없다.
// Vue 앱은 단일 DOM 요소(우리의 경우 #app)에 연결되어 DOM 요소를 완전히 제어함
// HTML는 엔트리 포인트일뿐 다른 모든 것은 새롭게 생성된 Vue 인스턴스 내에서 발생

app.message = 'I have changed the data!';
app.seen = false;

// 디렉티브 : Vue에서 제공하는 특수 속성임을 나타내는 v- 접두어가 붙어있으며, 렌더링 된 DOM에 특수한 반응형 동작을 합니다.

// v-bind 속성
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다'
    }
  })