// import Background from "../component/Background"
import Background from "../component/Background"
import { Container, Row } from 'react-bootstrap';
import { useEffect, useState } from "react";

import Shoes from "../component/ShoesData";
import i1 from '../img/shopping1.png';
import i2 from '../img/shopping2.png';
import i3 from '../img/shopping3.png';
import i4 from '../img/shopping4.png';
import i5 from '../img/shopping5.png';
import i6 from '../img/shopping6.png';
import data from "../data";


function Watch() {
  let [image, setImage] = useState([i1, i2, i3, i4, i5, i6])

  const watchItem = JSON.parse(localStorage.getItem('watched'))
  console.log(data)
  return (
    <Background
      back ={
        <>
          <h1>최근 본 상품</h1>
          <Container>
            <Row md="3">
              {DataFunc({data, image, watchItem})}
            </Row>
          </Container>
        </>
      }
    ></Background>
  )
}

export default Watch;

function DataFunc (props) {
  let array = []
  props.watchItem.map((e, idx) => {
    return (
      array.push(<Shoes key={e} id={e} imgurl={props.image[e]} title={props.data[e].title} price={props.data[e].price} />)
    )
  })
  return array
}