import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Footer from './components/Footer';
import './components/Header/index'
import Header from './components/Header/index';
import HomePage from './components/HomePage';
import Voyti from './components/Voyti';

function App() {
   const local = useLocation();
   const isLocal = local.pathname.includes("/Login");
  return (
    <div className="App">
      {!isLocal && <Header />}
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Voyti />} />
        </Routes>
      </div>
       {!isLocal &&<Footer />}
    </div>
  );
}

export default App;
