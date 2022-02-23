import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import MyRoutes from './routes';
// import Scroll from './components/smooth-scrollbar/SmoothScroll'

function App() {
  return (
    <Router>
      {/* <Scroll /> */}
      <MyRoutes />
    </Router>
  );
}

export default App;
