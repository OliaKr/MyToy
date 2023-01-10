import logo from './logo.svg';
import './assets/css/main.css'

import { Provider } from 'react-redux';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { AboutUs } from './pages/about-us';
import { HomePage } from './pages/home-page';

import { AppHeader } from './pages/app-header';
import {ToyIndex} from './pages/toy-index';
import { store } from './store/store';
import { ToyDetails } from './pages/toy-details';





function App() {
  return (

    <Provider store={store}>


    <Router>
      <section className='main-layout app'>
        <AppHeader />

        <main>
          <Routes>
            <Route element={<HomePage />} path="/"  /> 
            <Route element={<AboutUs />} path="about" /> 
            <Route element={<ToyIndex />} path="/toy" />
            <Route element={<ToyDetails/>} path="/toy/:toyId" />
            


          </Routes>
        </main>


      </section>
    </Router>
    </Provider>


  );
}

export default App;
