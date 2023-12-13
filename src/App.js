import './App.css';
import Profile from "./components/Profile";

function App(){
  return (
    <>
      <Profile
        img="https://cdn.pixabay.com/photo/2023/09/28/17/36/raccoons-8282171_640.jpg"
        name="너구리"
        title="프론트엔드 개발자" />
      <Profile
        img="https://cdn.pixabay.com/photo/2023/08/31/18/10/chicken-8225658_1280.jpg"
        name="닭"
        title="백엔드 개발자"
        isNew={true}
        />
      <Profile
        img="https://cdn.pixabay.com/photo/2023/10/31/23/06/tiger-8356190_1280.jpg"
        name="호랑이"
        title="풀스텍 개발자"/>


    </>
  );
}

export default App;
