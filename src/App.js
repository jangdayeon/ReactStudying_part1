/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import React from 'react'; //class를 만들었을 때 React.Component를 extens하기 때문에 React를 이처럼 import를 해줘야 함!!!
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function App() {

  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState('닫힘'); 
  let [title,setTitle] = useState(0);
  let [입력값,입력값변경]= useState('');
  

  function 함수(){
    let copy = [...a];
    copy.sort();
    제목변경(copy);
  }
  
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>

      <br></br>
      <button style={{backgroundColor:'grey'}} onClick={함수}>제목 변경</button>
      {a.map(function(글데이터,i){
        return(
          <div className="list" key={i}>
        <h4 onClick={()=>{
          setTitle(i); 
          
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{글데이터}  
          <span onClick={(e)=>{ e.stopPropagation(); let copy = [...따봉]; copy[i]+=1; 따봉변경(copy)}}>❤️</span> {따봉[i]} 
          <span> <button onClick={(e)=>{e.stopPropagation(); let copy = [...a]; copy.splice(i,1); 제목변경(copy);}}>삭제버튼</button></span>
          </h4> 
        <p>2월 17일 발행</p>
        </div>
        )
      })}
      <input onChange={(e)=>{입력값변경(e.target.value); console.log(입력값);}}/>
      <button onClick={()=>{let copy = [...a]; copy.unshift(입력값); 제목변경(copy);}}>버튼</button>

      {
        modal == '열림'? <Modal 글제목={a} color={'skyblue'} title={title}/> : '아님'

      }
      {/* ////////////////////////// */}
      <Modal2></Modal2>
      {/* ////////////////////////// */}
      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        class 어떻게 만드는지 배웠음!
        <br></br>아래 클래스구조 확인해보고, 유의할 점은 import를 해야한다는 점!
        <h3>
          <br></br>
        </h3>
        <h4>
        </h4>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        
      </div>

      
    </div>
    
  );
  

}

function Modal(props){
  return ( 
    <div className="modal" style={{background : props.color}}>
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={()=>{props.글제목변경(['여자코트 추천','강남 우동맛집','파이썬독학'])}}>글수정</button>
      </div>
  )
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
//요즘은 컴포넌트를 만들 때 class를 안쓰고 function을 사용하지만, 옛날 코드를 확인했을 경우를 대비하여
//class를 생성하는 방법에 대해 배워보자

class Modal2 extends React.Component {
  //class 내부에는 constructor, super, render을 무조건 채워넣어야 한다.
  constructor(){
    super();
    this.state = { //class에서 object를 만드는 방법
      name : '장다연',
      age : 22
    }
  }
  render(){
    return (
      <div>안녕 { this.state.name }아! 너가 {this.state.age}인가?
          <button onClick={()=>{this.setState({age:21})}}>22살 아니야</button>
        </div>
      )
    }
  }
  
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default App;
