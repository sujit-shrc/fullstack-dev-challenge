import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Admin/Login'
import AdminDashboard from './components/Admin/Dashboard'
import Analytics from './components/Admin/Analytics'
import Data from './components/Admin/Data'


function App() {

  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          { /* Admin Routes */ }
          <Route path="/admin/*" element={<AdminDashboard />}>
          <Route index element={<Analytics />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="data" element={<Data />} />
        </Route>

        </Routes>
      </>
  )
}

export default App
