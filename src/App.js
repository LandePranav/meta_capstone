import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import {Route, Routes } from 'react-router-dom';
import Success from './components/success';
function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/success' element={<Success />} />
        </Routes>
    </>
  );
}

export default App;
