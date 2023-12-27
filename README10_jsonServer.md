# json Server 사용하기 :작은 서버를 만드는 것 
api 소통할 때 제일 많이 쓰이는 파일 타입입니다.

- 사이트 : https://www.npmjs.com/package/json-server
![image](https://github.com/yunshinhee/node-js/assets/145514638/3e9e8f8b-a775-41ed-8e0e-f726f101cea0)


1️⃣ npm을 terminal에 추가한다 (사이트 아래쪽에 있음)
![image](https://github.com/yunshinhee/node-js/assets/145514638/d20f6ea7-2503-4114-9c8d-0298cc3057a9)
```
npm install -g json-server
```
![image](https://github.com/yunshinhee/node-js/assets/145514638/ea791b1a-f27b-499f-8d0e-a9d98f09d13d)

2️⃣ 확장명이 json 파일을 만든다(반드시 root자리에 만든다)
![image](https://github.com/yunshinhee/node-js/assets/145514638/28781895-c8a0-483e-bb1f-a91f84924b48)

json서버 실행 (기본적으로 3000번에서 시작하는데 react가 3000번을 사용하고 있기 때문에 다른 폰트 번호를 알려줘야한다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/4f29fb22-57fa-4e16-ac44-44f4cccc2a9e)

```
json-server --watch db.json
```
