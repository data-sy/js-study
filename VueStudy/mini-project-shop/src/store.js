import { createStore } from "vuex";

// count 예제
// const store = createStore({
//     state(){
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment (state) {
//             state.count++;
//         }
//     }
// })


// 로그인 시 사용자 정보 저장
import persistedstate from 'vuex-persistedstate';

const store = createStore({
    state(){
        return {
            user:{}
        }
    },
    mutations: {
        user(state, data) {
            state.user = data;
        }
    },
    plugins: [
        persistedstate({
            paths: ['user']
        })
    ]
})

export default store;
