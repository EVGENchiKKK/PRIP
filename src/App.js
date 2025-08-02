import './App.css';
import { VizitPage } from './pages/Vizitka/vizit';
import { Home } from './pages/Home/home';
import { BrowsPage } from './pages/Browse/brows';
import { PremiumPage } from './pages/Premium/PremiumPage';
import { Route, BrowserRouter, Routes} from 'react-router-dom';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { MyMusic } from './pages/MyMusic/MyMusic';
import { OpeningPage } from './pages/Opening/Opening';

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
            <Route path='/login' element={<LoginPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
