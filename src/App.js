import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
        </Routes>
    </>
  );
}

export default App;
