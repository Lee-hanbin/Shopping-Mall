import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import styled from 'styled-components';


// const YellowBtn = styled.button`
//   background: ${ props => props.bg };
//   color: ${ props => props.bg === 'blue' ? 'white' : 'black'};    // 배경이 파랑이면 font를 white로
//   padding: 10px;
// `


export default function DetailPage(props) {

  // let [ alert, alertSet] = useState(true);
  let [ count, setCount] = useState(0);
  let [ value, setValue] = useState('');
  
  
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
    </div> 
  )
}