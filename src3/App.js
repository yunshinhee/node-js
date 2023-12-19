import './App.css';
import Homepage from './page/Homepage';
import About from './page/About';
import Contact from './page/Contact';

import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    </>
  );
}

export default App;
