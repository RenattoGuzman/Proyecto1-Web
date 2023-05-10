import React from 'react';
import Cursor1 from './components/Cursor1';
import Cursor2 from './components/Cursor2';
import Cursor3 from './components/Cursor3';
import Cursor4 from './components/Cursor4';
import NavBar from './components/Navbar';
import Footer from './components/Footer';

import "./style.css"



const App = () => {
  return (
    <div>
      <NavBar/>
      <Cursor1 />
      <Cursor2 />
      <Cursor3 />
      <Cursor4 />
      <Footer />
    </div>
  );
};

export default App;
