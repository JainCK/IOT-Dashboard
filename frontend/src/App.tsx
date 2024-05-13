import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Dashboard from './Pages/Dashboard'
import './App.css'
import AdminDashboard from './Pages/AdminDash'
import Layout from './Pages/layout'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<AdminDashboard />} />
          {/* Add routes for "users" and "devices" with appropriate components */}
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
