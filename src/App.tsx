import './App.css'
import { Login } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/layout';
import { Users } from './pages/users';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/users" element={<Layout><Users/></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
