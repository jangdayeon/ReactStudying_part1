import logo from './logo.svg';
import './App.css'; //import 하는 방법

function App() {

  let post = '변수를 출력하는 방법'; //대충 서버에서 가져온 값이라고 가정
  // document.querySelector('h4').innerHTML = post; 원래 이런 식으로 사용해야 했음
  return (
    <div className="App">
      <div className="black-nav"> 
      {/* 여기는 js이기 때문에 class명을 지정할 때 class="black-nav"가 아니라
          className=""로 작성해야 한다. 나중에 class 선언할 때와 겹치기 때문이다.
      */}
      <div>이것은 html이 아니라 JSX 언어이다. </div>
      <div>.js파일에서 쓰는 html의 대용품이다.</div>
      <div>원래 리액트에서는 React.createElement('div',null,'HelloWorld')와 같이 코드를 짜야 한다.</div>
      </div>

      <h4>{post}</h4> 
      {/* 변수에 있던 데이터를 받고 싶으면 이와 같이 입력하면 됨 */}
      <h4 id={post}>데이터 바인딩 하는 방법</h4>
      {/* 위와 같이 변수명을 요소로 이용할 수도 있음 이런 것을 >>데이터 바인딩<< 이라고 함*/}

      <h4 style={ {color : 'blue', fontSize:'16px'} }>style 넣을 땐 style={'{{'}스타일명:'값'{'}}'}</h4>
      {/* font-size가 아니라 fontSize로 입력해야 함. */}
      {/* <h4 style="color:red;"> html이 아니기 때문에 이런식으로 작성하면 안됨</h4> */}
      
      <hr></hr>
      <h1 style={{color : 'red'}}>
        총 정리
      </h1>
      <h3>
        JSX 문법
        <br></br>
        1. class 넣을 땐 className<br></br>
        2. 변수 꽂을 땐 {'{'}변수명{'}'} <br></br>
        3. style 넣을 땐 style={'{{'}이름:'값'{'}}'}
      </h3>
      
    </div>

    
  );
}

export default App;
