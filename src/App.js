import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import i1 from './img/shopping1.png';
import i2 from './img/shopping2.png';
import i3 from './img/shopping3.png';
import i4 from './img/shopping4.png';
import i5 from './img/shopping5.png';
import i6 from './img/shopping6.png';

import data from './data';
import { createContext, useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';

import Shoes from './component/ShoesData';
import DetailPage from './routes/Detail';
import Cart from './routes/Cart';

// context (보관함) 를 만들어 줌
export let Context1 = createContext()


function App() {
  // Context API 연습
  let [store, setStore] = useState([10, 11, 12]);

  let [shoes, setShoes] = useState(data)
  let [image, setImage] = useState([i1, i2, i3, i4, i5, i6])
  let navigate = useNavigate();       // 페이지 이동 도와주는 함수

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}} >Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Link to="/"> 홈 </Link>
      <Link to="/detail">상세페이지</Link>

      <Routes>
        <Route path="/" element={
          <>
            <div className='main-bg' style={{ backgroundImage: 'url(' + bg + ')' }}></div>
            <Container>
              <Row>
                {DataFunc({shoes, image})}
              </Row>
              
            </Container>
            <button onClick={()=> {
              axios.get("https://codingapple1.github.io/shop/data2.json")
                .then((res) => {
                  let copy = [...shoes, ...res.data];
                  setShoes(copy);
                })
                .catch((err)=> console.log(err))


            }}>더보기</button>
          </>
        } />

        <Route 
          path="/detail/:id" 
          element={
            // Context1로 감싸서 Props -> props -> .. 대신 한번에 사용가능
            <Context1.Provider value={{store}}>
              <DetailPage shoes={shoes} image={image} />
            </Context1.Provider>
          }
        />

        <Route path="/cart" element={<Cart></Cart>}></Route>

        <Route path="*" element={<div>없는 페이지롱</div>} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>요 멤버쓰</div>} />
          <Route path="location" element={<div>요 위치쓰</div>} />
        </Route >

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

      </Routes>



    </div>
  );
}

function DataFunc (props) {
  let array = []
  for ( let i = 0; i < props.shoes.length ; i++) {
    array.push(<Shoes id={i} imgurl={props.image[i]} title={props.shoes[i].title} price={props.shoes[i].price}></Shoes>)
  }
  return array
}

function About () {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event () {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>  
  )
}

export default App;
