# 폴더 src 참조

# react에서는 데이터를 변할 수 있는 값이며 값이 변할 때마다 UI를 변경해 달라고 (화면을 다시 그려달라) react에 알려야한다. 그럴때 사용하는 것이 useState()이다.

```
const[num, setNum]=useState(0)
이 데이터를 변할 수 있는 값 => num
num을 변하게 하는 함수 => setNum => 함수를 이용하여 num을 변경한다
useState(0)의 0은 num의 초기값
```

# 부분적으로 값 받기
![image](https://github.com/yunshinhee/node-js/assets/145514638/8c0e2aef-dc87-4c37-b0ef-bec678439d66)
![image](https://github.com/yunshinhee/node-js/assets/145514638/b90db208-e4a3-4478-b6c5-4720e16cc45e)

# 🔔구조분해
```
import React from "react";
  
const Profile = ({img,name,title,isNew}) => {
  //|| -->또는 A || B 둘중에 하나라도 true이면 true
  //&& -->그리고 A && B 둘중에 하나라도 false면 false

  //console.log(props)
  // const img=props.img;
  // const name=props.name;
  // const title=props.title;
  // const isNew=props.isNew;

  //구조분해 destructure
  //const {img,name,title,isNew}=props;

  return(
    <div className="profile">
      <img src={img} alt="animal" />
      {/* {!props.isNew?<span className="new">신입</span>:""} */}
      {isNew && <span className="new">신입</span>}
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
};

export default Profile;
```



