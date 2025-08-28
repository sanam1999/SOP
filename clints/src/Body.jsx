
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import CurrencyConverter from './Pages/Currency-Converer/Currency_Conveter';
import Profile from './Pages/Profile/Profile';
import Weather from './Pages/Weather/Weather';
import SavedTrips from './Pages/Tripsaved/Tripsd';
import Country from './Pages/CountryInfo/CountryInfo';
import NotFound from './Components/404/404';
function Body({type}) {
  return (
    <>
      <Routes>
         <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/currency-converter" element={<CurrencyConverter/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/saved-trips" element={<SavedTrips/>}/>
        <Route path="/country-info" element={<Country/>}/>
       
      </Routes>
    </>
  );
}

export default Body;

