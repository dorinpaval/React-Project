import './App.css';
import Home from './pages/Home';
import AllRooms from './pages/AllRooms';
import PageNotFound from './pages/PageNotFound';
import RoomDetails from './pages/RoomDetails';
import NavBar from './components/NavBar';
import ContactUs from './pages/ContactUs';
import SignInUp from './components/SignInUp'
import Subscribe from './components/Footer'
import Services from './components/Services';
import FeaturedRooms from './components/FeaturedRoom';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/featuredrooms' element={<FeaturedRooms />}></Route>
        </Route>
        <Route path='/rooms/' element={<AllRooms />}></Route>
        <Route path='/rooms/:slug' element={<RoomDetails />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/login' element={<SignInUp />}></Route>
        <Route extract path='*' element={<PageNotFound />}></Route>

      </Routes>
      <Subscribe />
    </>
  );
}

export default App;
