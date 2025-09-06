import './App.css'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import ProtectedRoute from './pages/ProtectedRoute'
import Tasks from './pages/Tasks/Tasks'
import Footer from './components/footer'
import Header from './components/header'
import NoLogin from './pages/NoLogin'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route element={<NoLogin/>}>
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
        </Route>
        <Route element={<ProtectedRoute/>}>
          <Route path='/' element={<Tasks/>}></Route>
        </Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App
