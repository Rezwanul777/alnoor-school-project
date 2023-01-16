
import { Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Header';
import './App.css';
import Home from './pages/Home/Home';
//import Abouts from './pages/Abouts/About';
import Features from './pages/Home/features/Feature';
import Abouts from './pages/Abouts/Abouts';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import { useEffect } from 'react';

// animation part import
import AOS from 'aos';
import 'aos/dist/aos.css';




// for using animation
function App() {
  useEffect(()=>{
    AOS.init();
  },[])

  return (
    <div >
    <Header></Header>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
     <Route path='/home' element={<Home></Home>}></Route>
     <Route path='/about' element={<Abouts></Abouts>}></Route>
     <Route path='/features' element={<Features></Features>}></Route>
     <Route path='/faq' element={<FAQ></FAQ>}></Route>
     <Route path='/contact' element={<Contact></Contact>}></Route>
     <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
