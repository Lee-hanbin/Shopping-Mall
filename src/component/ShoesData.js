
import { useState } from 'react';
import {Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


export default function Shoes({id, imgurl, title, price}) {
  const navigate = useNavigate()

  return (
    <Col>
      <img 
        style={{ height: "60%", cursor: "pointer" }} 
        src={imgurl} 
        alt="1" 
        width="80%" 
        onClick={() => {
          navigate(`/detail/${id}`)
        }} />
      <h4>{title}</h4>
      <p>{price}</p>
    </Col>
  )
}