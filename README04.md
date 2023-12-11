# react에서는 데이터를 변할 수 있는 값이며 값이 변할 때마다 UI를 변경해 달라고 (화면을 다시 그려달라) react에 알려야한다. 그럴때 사용하는 것이 useState()이다.

const[num, setNum]=useState(0)
이 데이터를 변할 수 있는 값 => num
num을 변하게 하는 함수 => setNum => 함수를 이용하여 num을 변경한다
useState(0)의 0은 num의 초기값
