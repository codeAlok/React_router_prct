import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import User from './components/User';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/about' element={ <About /> } /> 

            {/* to change link through params */}
          <Route path='/user/:name' element={ <User /> } />

          {/* <Route path='/*' element={ <Page404 />} /> */}
          {/* by default invalid path reqested , redirect on home page */}
          <Route path='/*' element={ <Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
