import './App.css';
import Home from './components/Home';
import Main from './components/Main';
import {Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/reservations" element={<Main />} />
        </Routes>
    </>
  );
}

export default App;
