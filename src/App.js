import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

const Home = lazy(() => import('./routes/Home'));
const Detail = lazy(() => import('./routes/Detail'));


const App = () => {
  useEffect(() => {
    const html = document.documentElement;
    let hWidth = html.getBoundingClientRect().width;
    if (hWidth > 750) {
      hWidth = 750;
    }
    html.style.fontSize = hWidth / 20 + 'px';
  }, [])
  
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </Suspense>
    </Router>
  )
};

export default App;
