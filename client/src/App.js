import './App.css';
//react-router-dom
import { Route, Routes } from 'react-router-dom';
//import  components
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';
import NewActivity from './components/NewActivity/NewActivity';
import ErrorPage from './components/Error/ErrorPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <LandingPage/> }/>
        <Route path='/home' element={ <Home/> }/>
        <Route path='/detail/:detailId' element={ <CountryDetail/> }/>
        <Route path='/newActivity' element={ <NewActivity/> }/>
        <Route path='*' element={ <ErrorPage/> }/>
      </Routes>
    </div>
  );
}

export default App;
