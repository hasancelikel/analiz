import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import App from './App'
import HomepPage from './HomepPage';
import Alm from './page/Alm';
function All() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomepPage />} />
          <Route path='/App' element={<App />} />
          <Route path='/Alm' element={<Alm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default All;