import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Testimonial from './pages/Testimonial';
import Team from './pages/Team';
import Services from './pages/Services';
import Package from './pages/Package';
import Error from './pages/Error404';
import Destination from './pages/Destination';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import About from './pages/About';

export default function routes(){
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/testimonial' element={<Testimonial/>}/>
            <Route path='/team' element={<Team/>}/>
            <Route path='/service' element={<Services/>}/>
            <Route path='/package' element={<Package/>}/>
            <Route path='/error' element={<Error/>}/>
            <Route path='/destination' element={<Destination/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/booking' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    )
}