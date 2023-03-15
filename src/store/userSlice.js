import { createSlice } from "@reduxjs/toolkit";

export let cart = createSlice({
  name: 'cart',
  initialState: [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ],
  reducers: {
    changeCount(state, action){

      // 강사님 방법 (findIndex 사용)
      let idx = state.findIndex((a) => a.id === action.payload)
      state[idx].count += 1

      // // 내 방법 (반복문)
      // state.map((a, i) => {
      //   if (state[i].id === action.payload){
      //     state[i].count += 1
      //   }
      // })
    },
    addCart(state, action){
      let flag = 0;
      for (var i= 0; i < state.length; i++){
        if (state[i].id === action.payload.id){
          flag = 1
          state[i].count += 1
        }
      }
      if (flag === 0){
        state.push(action.payload)
      }
    }
  }
})

export let user = createSlice({  //useState와 비슷한 역할
  name: 'user',           // 저장할 state이름 입력
  initialState: { name : 'lee', age : 30 },    // state에 들어갈 값
  reducers: {             // 수정하는 함수들 정의
    changeName(state){    // state는 기존의 값 
      // return 'john ' + state 
      state.name = 'Lee'
    },
    changeAge(state, a){
      state.age += a.payload
    }
  }
})

export let stock = createSlice({ //useState와 비슷한 역할
  name: 'stock',          // 저장할 state이름 입력
  initialState: [10, 11, 12]    // state에 들어갈 값
})


export let { changeCount, addCart } = cart.actions
export let { changeName, changeAge } = user.actions

