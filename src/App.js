
import { Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Header';
import './App.css';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import { useEffect } from 'react';

// animation part import
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div >
    <Header/>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
