# useEffecft

# useEffect(()=>{},[])

# useEffect(()=>{},[])  -> 배열이 비어있을 경우에는 component가 실행될 때 처음 한번만 실행된다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/2f744f14-79c6-4021-af81-2316fb0a9513)

# useEffect(()=>{},[products]) -> products의 값이 바뀔 때 마다 useEffect가 실행된 후 (component가 실행될 때 처음 한번만 실행된다.)
![image](https://github.com/yunshinhee/node-js/assets/145514638/a406cbfe-2dc4-4c2e-909d-3ccb7635bc29)

# useEffect(()=>{},[products,count]) -> products의 값이 바뀔 때 마다 useEffect가 실행된 후 products와 count중 하나라도 값이 바뀌면 useEffect가 실행됨(2개 다 바뀌어도 한번만 실행됨)

# useEffect() 가 종료되는 시점에 데이타가 변경된다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/1e0ae9e2-1106-4690-ab31-c17874d7f7be)
