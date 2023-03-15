import { memo, useState } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Background from "../component/Background.jsx";
import { changeAge, changeCount, changeName } from "../store/userSlice.js";


// 만약 Child라는 자식 컴포넌트가 성능저하를 일으키는 주범이라면!? 
// => 필요할 때만 렌더링 하고싶지!

// function Child(){
//   console.log('재렌더링')
//   return <div>자식임</div>
// }

let Child = memo( function(){
  console.log('재렌더링')
  return <div>자식임</div>
})

export default function Cart() {

  let user = useSelector((state)=> state.user ) // Store 안에 모든 state를 뜻함
  let cart = useSelector((state)=> state.cart )
  
  let [count, setCount] = useState(0)

  let dispatch = useDispatch();
  
  console.log(user)
  return (
    <Background
      back={
        <>
          <Child count={count}></Child>
          <button onClick={()=>{ setCount(count+1)}}>버튼버튼</button><br />
          {user.name}의 장바구니 <br/>
          {user.name}의 나이 {user.age}
          <button onClick={() => dispatch(changeAge(2))}>+버튼</button>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경하기</th>
              </tr>
            </thead>
            <tbody>
              {
                cart.map((a, i) => {
                  return (
                    <tr key={i}>
                      <td>{i+1}</td>
                      <td>{cart[i].name}</td>
                      <td>{cart[i].count}</td>
                      <td>
                        <button onClick={() => {
                          dispatch(changeCount(cart[i].id))
                        }}>+</button>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
        </>

      }
    >
    </Background>
  )
}