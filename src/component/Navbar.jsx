import { Container, Nav, Navbar } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { useQuery } from 'react-query';


function NavbarUi() {
  let navigate = useNavigate();       // 페이지 이동 도와주는 함수


  // axios 요청을 useQuery 감싸서 사용
  let res = useQuery('getName', () => {
    return axios.get('https://codingapple1.github.io/userdata.json')
    .then((a) => { 
      console.log('요청됨')
      return a.data
    })
  },{ staleTime : 2000 })
  
  // res.data // ajax요청이 성공시 데이터
  // res.isLoading // 로딩중인지 쉽게 파악 가능
  // res.error // 실패시 true


  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}} >Cart</Nav.Link>
            <Nav.Link onClick={() => {navigate('/watched')}}>최근 본 상품</Nav.Link>
          </Nav>
          {/* <Nav style={{ color: "white"}} >반가워요 Lee</Nav> */}
          <Nav style={{ color: "white"}}>
            {/* { res.isLoading ? 'loading...' : res.data.name} */}
            { res.isLoading && 'loading...'}
            { res.error && 'error...'}
            { res.data && res.data.name}
            
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavbarUi;