
import './App.css';
// import { useLocation } from 'react-router-dom';
// import { useEffect } from 'react';
import {Routes , Route} from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import RoomDetails from './Components/RoomDetails/RoomDetails';
import CheckAvailability from './Pages/CheckAvailability';
import BookPage from './Pages/BookPage';
import AboutUs from './Pages/AboutUs';
import Pay from './Components/Payment/Pay';
import Loader from './Components/Loader/Loader';
import Rooms from './Components/Rooms/Rooms';
import BookRoompage from './Pages/BookRoompage';
import ContactusPage from './Pages/ContactusPage';
import GaleryPage from './Pages/GaleryPage';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <div className="App">
       <main>  
       <ScrollToTop/>
      <Routes>
       
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/roomdetails' element={<RoomDetails/>}/>
         <Route path='/checkavailability' element={<CheckAvailability/>}/>
         <Route path='/bookroom' element={<BookPage/>}/>
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/payment' element={<Pay/>} />
         <Route path='/rooms' element={<BookRoompage/>} />
         <Route path='/loader' element={<Loader/>}/>
         <Route path='/contactus' element={<ContactusPage/>} />
         <Route path='/gallery' element={<GaleryPage/>} />
      </Routes>
     </main>
    </div>
  );
}

export default App;
