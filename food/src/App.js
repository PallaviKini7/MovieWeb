import './App.scss';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './component/header/header';
import Home from './component/home/home';
import MovieDetail from './component/movieDetail/movieDetail';
import PageNotFound from './component/PageNotFound/pageNotFound';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="/home" element={<Home />} />
        <Route path='/notfound' element={<PageNotFound/>}/>
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
