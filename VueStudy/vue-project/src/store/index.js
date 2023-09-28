import { createStore } from 'vuex';

// [store 데이터 설정 실시]
const store = createStore ({
  state: { // [변수들의 집합]
    name: "투케이"
  },
  getters: { // [state의 변수들을 get 호출]
    getUserInfo(state){
        return "이름 : " + state.name;
    }
  },
  mutations: { // [변수들을 조작하는 함수들]
    setUserInfo(state, name){
        state.name = name;
    }
  },
  actions: { // [비동기 처리를 하는 함수들]
  },
});

export default store;
