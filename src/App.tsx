import './App.css'
import { Login } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user" element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
