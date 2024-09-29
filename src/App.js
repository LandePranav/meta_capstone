import './App.css';
import BookingPage from './components/BookingPage';
import Home from './components/Home';
import {Route, Routes } from 'react-router-dom';
import Success from './components/success';
import BookingContext from './components/BookingContext';
function App() {
  return (
    <>
    <BookingContext>
      <Routes>
          <Route index element={<Home />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path='/success' element={<Success />} />
        </Routes>
    </BookingContext>
    </>
  );
}

export default App;
