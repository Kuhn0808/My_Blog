import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Navigation from './components/navigation/navigation';
import Main from './components/mainpage/main';

function App() {
  return (
    <div>
      <Header />
        <Navigation/>
        <Routes>
          <Route path='/' element={<Main></Main>}></Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;