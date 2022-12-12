import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } /> 

          {/* <Route path='/*' element={ <Page404 />} /> */}
          {/* by default invalid path reqested , redirect on home page */}
          <Route path='/*' element={ <Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
