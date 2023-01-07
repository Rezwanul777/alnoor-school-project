
import { Route, Routes } from 'react-router-dom';
import Header from './pages/shared/Header';
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
    </Routes>
    </div>
  );
}

export default App;
