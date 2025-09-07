import './App.css';
import { VizitPage } from './pages/Vizitka/vizit';
import { Home } from './pages/Home/home';
import { BrowsPage } from './pages/Browse/brows';
import { PremiumPage } from './pages/Premium/PremiumPage';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { LoginForm } from './pages/LoginPage/LoginForm';
import { MyMusic } from './pages/MyMusic/MyMusic';
import { OpeningPage } from './pages/Opening/Opening';
import { Profile } from './pages/Profile/Profile';
import { ContactUs } from './pages/ContactUs/ContactUs';

function App() {
  return (
    <div className='App'>
      <div className='black'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VizitPage/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/brows' element={<BrowsPage/>}/>
            <Route path ='/mymusic' element={<MyMusic/>}/>
            <Route path='/premium' element={<PremiumPage/>}/>
            <Route path='/opening' element={<OpeningPage/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contactUs' element={<ContactUs/>}/>
            <Route path='/login' element={<LoginForm/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
