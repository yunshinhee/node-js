# useEffecft - 폴더 src4 참조하기 

# useEffect(()=>{},[])

# useEffect(()=>{},[])  -> 배열이 비어있을 경우에는 component가 실행될 때 처음 한번만 실행된다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/2f744f14-79c6-4021-af81-2316fb0a9513)

# useEffect(()=>{},[products]) -> products의 값이 바뀔 때 마다 useEffect가 실행된 후 (component가 실행될 때 처음 한번만 실행된다.)
![image](https://github.com/yunshinhee/node-js/assets/145514638/a406cbfe-2dc4-4c2e-909d-3ccb7635bc29)

# useEffect(()=>{},[products,count]) -> products의 값이 바뀔 때 마다 useEffect가 실행된 후 products와 count중 하나라도 값이 바뀌면 useEffect가 실행됨(2개 다 바뀌어도 한번만 실행됨)

# useEffect() 가 종료되는 시점에 데이타가 변경된다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/1e0ae9e2-1106-4690-ab31-c17874d7f7be)

# 이전값 prev
```
import { useState } from "react";
import "./App.css";

function App() {
  //let num=0;
  let [num, setNum] = useState(0);


  return (
    <div className="counter">
      <span className="number">{num}</span>
      <button className="button" onClick={() => {
         //아래 코드 세줄에서는 값의 변화가 없다 
         //상태값은 함수가 종료후 다시 함수가 실행될 때 반영되기 때문이다.
         //num은 모두 0이다.

         // setNum(num + 1) 
         // setNum(num + 1) 
         // setNum(num + 1) 


         //prev는 이전값을 가지고 있음 
         // setNum((prev)=>{return rev + 1}) //한단계 전의 값 
         // ⬇
          setNum((prev)=>prev + 1) //1
         // setNum((prev)=>prev + 1)//2
         // setNum((prev)=>prev + 1)//3
        
        }}>1씩증가</button>

        <form action="#">
          <input type="text" />
        </form>
    </div>
  );
}

export default App;
```
