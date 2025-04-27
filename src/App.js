import './App.css';
import { VizitPage } from './pages/Vizitka/vizit';
import { Home } from './pages/Home/home';
import { BrowsPage } from './pages/Browse/brows';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <div className='black'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<VizitPage/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path='/brows' element={<BrowsPage/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
