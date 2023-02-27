import { configureStore } from "@reduxjs/toolkit";
import { cart, stock, user } from "./store/userSlice";


export default configureStore({
  reducer: {  // 위에서 정의한 state를 사용하기 위해 등록해줌
    user : user.reducer,     // 작명 : user.reducer
    stock : stock.reducer,
    cart : cart.reducer
  }
})