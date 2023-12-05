# 1.node-js 설치
*자바스크립트를 브라우저 밖에서도 동작할 수 있게 하는 런타임 환경
*Node.js가 제공하는 것이 npm(Node Package Manager)
*npm이란 node.js로 만들어진 필요한 모듈을 다운받고 관리해줌. 다른 개발자가 만들어둔 유용한 node.js로 만들어진 툴로 가져다 쓸 수 있음
*npm을 이용한 유용한 라이브러리를 다운받을 예정 ("개발은 가져다쓰는게 절반이다")

![image](https://github.com/yunshinhee/node-js/assets/145514638/0d4243c9-834a-4206-a0bb-2dcb8acd9a4c)
윈도우 버튼옆에 cmd라고 치고 열기(명령프롬프트),관리자 권한으로 열기를 하면 
![image](https://github.com/yunshinhee/node-js/assets/145514638/6aec47e5-05dd-4581-b161-000f6f50667e)
이런 모양의 화면이 보인다.

*node.js 사이트에서 설치파일을 다운받고 그것을 설치한다
*cmd 화면에서 
```
node -v
```
을 입력하면 아래 버전이 나오면 설치 완료된 것이다.
![image](https://github.com/yunshinhee/node-js/assets/145514638/489ca446-3162-4b78-9228-10c67d8b4591)

*node.js를 설치하면 npm이 자동으로 설치됨(npm -v 검색으로 확인 가능)
![image](https://github.com/yunshinhee/node-js/assets/145514638/13f3b6b4-b2ca-464d-9aa8-1edcfd0d4a4d)

*npx는 npm이 설치될 때 함께 설치가 된다.(npx -v 검색으로 확인 가능)
![image](https://github.com/yunshinhee/node-js/assets/145514638/9cd3b280-44b0-4a6e-b9cb-2ef20e0fefdd)


🚩npm: 외부 라이브러리를 쉽게 설치하고 버전을 관리할 수 있게 한다. --> package.json을 만들게 된다.
🚩npx: 라이브러리를 개별적으로 실행하고자 할 때 사용하는 것이다

# 1.폴더 생성 
- 프로젝트를 만들 폴더를 만든다 ex)ysh react
# 2.리액트에서 필요한 패키지를 자동으로 설치해 주는 명령어를 입력한다
```
npx create-react-app my-app 리액트가 실행될 폴더명 ['my-app'자리에 내가 원하는 폴더명]
아래와 같이 만든다 
npx create-react-app siniapp
```
ysh react 안에 siniapp 구조가 만들어진다
siniapp폴더 안으로 진입한다
```
cd my-app  ['my-app'자리에 내가 원하는 폴더명]
아래와 같이 만든다
cd siniapp

```
my-app안에 소스를 실행한다
npm start
```

#SPA:Single Page Application
-페이지는 하나인데 여러개인 것 처럼 눈속임을 한다. 페이지가 여러개인 것 처럼 보이지만 사실은 하나!
-페이지를 매번 새로 가져올 필요가 없음, 웹사이트를 모바일처럼 사용할 수 있음.
