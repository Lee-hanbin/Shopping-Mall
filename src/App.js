import './App.css';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import bg from './img/bg.png';
import i1 from './img/shopping1.png';
import i2 from './img/shopping2.png';
import i3 from './img/shopping3.png';
import data from './data';
import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

import Shoes from './component/ShoesData';
import DetailPage from './routes/Detail';

function App() {
  
  let [shoes, setShoes] = useState(data)
  let [image, setImage] = useState([i1, i2, i3])
  let navigate = useNavigate();       // 페이지 이동 도와주는 함수

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}} >Cart</Nav.Link>
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
              <Row>{DataFunc({shoes, image})}</Row>
            </Container>
          </>
        } />
        <Route path="/detail/:id" element={<DetailPage shoes={shoes} image={image} />}/>

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
    array.push(<Shoes imgurl={props.image[i]} title={props.shoes[i].title} price={props.shoes[i].price}></Shoes>)
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
