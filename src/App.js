import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Services from './pages/services/Services';
import Concern from './pages/concern/Concern';
import Media from './pages/media/Media';
import News from './pages/news/News';
import About from './pages/about/About';
import GetInTouch from './pages/get-in-touch/GetInTouch';
import ApplyForMembership from './pages/membership/ApplyForMembership';
import Login from './pages/authentication/Login';
import Registration from './pages/authentication/Registration';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <div className='text-black'>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/our-concern' element={<Concern></Concern>}></Route>
        <Route path='/media' element={<Media></Media>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/get-in-touch' element={<GetInTouch></GetInTouch>}></Route>
        <Route path='/apply-membership' element={<ApplyForMembership></ApplyForMembership>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/registration' element={<Registration></Registration>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
