import './App.css';
import Navbar from './components/Navbar';
import SearchBox from './components/SearchBox';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import Footer from './components/Footer';
import { createContext, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

const UseContextApi = createContext("");

function App() {

  const location = useLocation();
  console.log(location.pathname);

  const [inputSearchData, setInputSearchData] = useState('');


  return (
    <>

      <UseContextApi.Provider value={{ inputSearchData, setInputSearchData }}>
          <Navbar />
          {location.pathname === '/Analytic_Assignment_ReactJs/' ? (<SearchBox />) : (" ") }
        <Routes>
          <Route path='/Analytic_Assignment_ReactJs/' exact element={<Posts />} />
          <Route path='/comments/:userId/:postId' exact element={<Comments />} />
        </Routes>
        <Footer />
      </UseContextApi.Provider>

    </>
  );
}

export { UseContextApi, App };
