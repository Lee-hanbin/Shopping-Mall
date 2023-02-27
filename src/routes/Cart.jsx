import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeAge, changeCount, changeName } from "../store/userSlice.js";


export default function Cart() {

  let user = useSelector((state)=> state.user ) // Store 안에 모든 state를 뜻함
  let cart = useSelector((state)=> state.cart )
  
  let dispatch = useDispatch();
  
  console.log(user)
  return (
    <div>
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
    </div>
  )
}