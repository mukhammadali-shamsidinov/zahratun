import { Route, Routes } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/700.css';
import Home from "./pages/Home/Home"
import Chart from './pages/Chart/Chart'
import Product from './pages/Products/Product'
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
