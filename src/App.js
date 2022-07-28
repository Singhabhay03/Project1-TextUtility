
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Time from './components/Time';
import Login from './components/Login';
import About from './components/About';
import SignUp from './components/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Mytext-Utility" />
        
        <Routes>
          <Route path='/About' element={<About />} />

          <Route path='/Time' element={<Time />} />

          <Route path='/' element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path='/TextForm' element={<TextForm />} />

        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </>
  );
}

export default App;
