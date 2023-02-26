
import {Col } from 'react-bootstrap';


export default function Shoes({imgurl, title, price}) {

  
  return (
    <Col>
      <img src={imgurl} alt="1" width="80%" />
      <h4>{title}</h4>
      <p>{price}</p>
    </Col>
  )
}