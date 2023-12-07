# 🎃JSX 문법
https://react.dev/learn#writing-markup-with-jsx

- 컴퍼넌트의 return()에서는 반드시 하나의 태그로 싸여 있어야 한다.
- 태그대신 <></> Fragment를 사용할 수 있다.
- class명을 className="class명"
- javaScript 코드를 JSX 문법안에서 사용해야 할때는 {javaScript 코드} 형식으로 사용해야 한다.

- {}을 사용하지 않으면 변수가 그냥 문자로 출력됨
- 인라인스타일로 css를 작성할 때 ==> 밖의 {}는 자바스크립트를 사용한다는 의미, 안의 {}는 객체를 사용한다는 의미 
- <div style={{width:"300px", height:"200px"}}>추가하기</div>


```
import "./App.css";

function App() {
  const name = "강아지";
  return (
    <>
      <div className="App">
        <p>{`${name} 시작하기`}</p>
      </div>
      <div style={{ width: "300px", height: "200px" }}>추가하기</div>
    </>
  );
}

export default App;
```
