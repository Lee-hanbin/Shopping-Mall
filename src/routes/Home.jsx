import axios from "axios";
import { Container, Row } from 'react-bootstrap';
import { useState } from "react";

import '../App.css';
import Shoes from "../component/ShoesData";
import NavbarUi from "../component/Navbar";
import bg from '../img/bg.png';
import i1 from '../img/shopping1.png';
import i2 from '../img/shopping2.png';
import i3 from '../img/shopping3.png';
import i4 from '../img/shopping4.png';
import i5 from '../img/shopping5.png';
import i6 from '../img/shopping6.png';
import data from "../data";

function Home (){
  let [shoes, setShoes] = useState(data)
  let [image, setImage] = useState([i1, i2, i3, i4, i5, i6])

  return (
    <div className="App">
      <NavbarUi />
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
        </div>
  )
}

export default Home;


function DataFunc (props) {
  let array = []
  for ( let i = 0; i < props.shoes.length ; i++) {
    array.push(<Shoes id={i} imgurl={props.image[i]} title={props.shoes[i].title} price={props.shoes[i].price}></Shoes>)
  }
  return array
}