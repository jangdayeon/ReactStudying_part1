/* eslint-disable */

import logo from './logo.svg';
import './App.css'; 
import { useState } from 'react';

function App() {

  ////////////////////////////////for문 사용법
  var 어레이 = [];
  for(var i=0;i<3;i++){
    어레이.push(<div>안녕</div>)
  }
  ////////////////////////////////


  let logo = "ReactBlog";
  let [a,제목변경] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);

  
  /////////////////////////////////따봉 누르면 전체 따봉+1되는 문제 해결
  let [따봉, 따봉변경] = useState([0,0,0]);
  /////////////////////////////////


  let [modal, setModal] = useState('닫힘'); 
  

  function 함수(){
    let copy = [...a];
    copy.sort();
    제목변경(copy);
  }
  
  ////////////////////////////////map 사용 방법
  [1,2,3].map(function(a){
    //1. array 자료 갯수만큼 함수 안의 코드를 실행해줌
    //2. 함수의 파라미터는 array안에 있던 자료임
    //3. return에 뭐 적으면 array로 담아줌
    return '133211'// ['123321','123321','123321']
  })
  ////////////////////////////////
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      {

        <div> {어레이} </div>
      /* {
        [1,2,3].map(function(){
          return <div>안녕</div>
        })
      }
      {[<div>안녕</div>,<div>안녕</div>,<div>안녕</div>]} */}

      <br></br>
      <button style={{backgroundColor:'grey'}} onClick={함수}>제목 변경</button>
      {a.map(function(글데이터,i){
        return(
          <div className="list" key={i}>
        <h4 onClick={()=>{ 
          modal =='열림'? setModal('닫힘'):setModal('열림');
          }}>{글데이터}  <span onClick={()=>{ let copy = [...따봉]; copy[i]+=1; 따봉변경(copy)}}>❤️</span> {따봉[i]} </h4> 
        {/* <h4>{a[i]} </h4> */}
        <p>2월 17일 발행</p>
        </div>
        )
      })}
      {
        modal == '열림'? <Modal/> : '아님'
      }

      <div>
        <h1 style={{color:'red'}}>총 정리</h1>
        오늘은 반복문 사용방법에 대해 배웠음 <br></br>
        <h3>
          map()함수<br></br>
          1. 왼쪽 array 자료만큼 내부코드 실행해줌<br></br>
          2. return 오른쪽에 있는 걸 array로 담아줌<br></br>
          3. 유용한 파라미터 2개 사용가능(배열파라미터,인덱스)
        </h3>
        <h4>
          (참고) map 반복문으로 반복생성한 html엔 key={'{i}'} 이런 속성을 추가해야 한다.
          <br></br>왜냐하면, 생성된 div마다 각자 고유의 key가 있기 때문에 설정해야 함. 그래야 리엑트가 각각 구분 가능
          <br></br><br></br>
          (참고) 일반 for 반복문을 쓰고 싶다면,
          <br></br>1. html들을 담아둘 array 자료를 하나 만들어 준다.
          <br></br>2. 일반 for 반복문을 이용해 반복문을 돌린다.
          <br></br>3. 반복될 때마다 array자료에 {'<div>'} 하나씩 추가해준다.
          <br></br>4. 원하는 곳에서 {'{array자료}'} 사용하면 된다.
        </h4>
        <hr style={{width:'100px', height:'5px',backgroundColor:'black'}}></hr>
        
      </div>
    </div>
    
  );
  

}

function Modal(){
  return ( 
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
