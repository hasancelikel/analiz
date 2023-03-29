import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import App from './App'
import HomepPage from './HomepPage';

function All() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<HomepPage />} />
          <Route path='/App' element={<App />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default All;
