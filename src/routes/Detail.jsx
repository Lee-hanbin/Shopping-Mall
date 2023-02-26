import { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';

import { Context1 } from './../App.js'

// const YellowBtn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg === 'blue' ? 'white' : 'black'};    // 배경이 파랑이면 font를 white로
//   padding: 10px;
// `



export default function DetailPage(props) {



  // let [ alert, alertSet] = useState(true);
  let [ count, setCount] = useState(0);
  let [ value, setValue] = useState('');
  let [ tab, setTab] = useState(0);
  
  // Context API 연습
  
  
  let {id} = useParams();
  for ( let i = 0; i < props.shoes.length ; i++) {
    if (id ===  String(props.shoes[i].id)){
      id = i
      break;
    } 
  }
  
  // useEffect(() => {
  //   // 타이머
  //   let timer = setTimeout(() =>{ alertSet(false)}, 2000)

  //   return ()=> {
  //     // 기존 타이머는 제거해줘
  //     // useEffect 실행되기 전에 사용
  //     clearTimeout(timer) 
  //   }
  // }, [])

  useEffect(()=>{
    if (isNaN(value) === true){
      alert("그러지마세요");
    }
  },[value])

  return (
    <div className="container">
      <input onChange={(e)=>{ setValue(e.target.value) }} />
      {/* {
        alert === true
        ? (<div className="alert alert-warning">
            2초 이내 구매시 할인
          </div>)
        : null
      } */}
      {count}
      <button onClick={()=>{ setCount(count+1)}}></button>
      <div className="row">
        <div className="col-md-6">
          <img src={props.image[id]} width="100%" alt='1'/>
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item >
          <Nav.Link eventKey="link-00" onClick={() => setTab(0)}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-01" onClick={() => setTab(1)}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-02" onClick={() => setTab(2)}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <Tab tab={tab}/>
    </div> 
  )

}

function Tab({tab}) {
  // context(보관함)을 해체해줌
  let {store} = useContext(Context1)
  
  // // 방법1. array 사용 (깔꼼)
  // return [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]

  // 방법1-1 Context를 통해 데이터 상속
  return <div>{store[tab]}</div>

  // 방법2. 조건문 사용
  // if (tab === 0){
  //   return <div>내용0</div>
  // } else if (tab === 1){
  //   return <div>내용1</div>
  // } else {
  //   return <div>내용2</div>
  // }
}
