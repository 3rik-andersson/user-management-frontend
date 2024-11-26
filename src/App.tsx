import './App.css'
import { Login, Users, UserDetail } from './pages'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from './pages/layout';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/users" element={<Layout><Users /></Layout>} />
        <Route path="/users/:id" element={<Layout><UserDetail/></Layout>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
