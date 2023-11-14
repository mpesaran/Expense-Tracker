import { Route , Routes , BrowserRouter , Navigate } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'

function App() {
  const {user ,authIsReady} = useAuthContext()

  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element ={!user ? <Navigate to="/login" /> : <Home />} />  
            <Route path="/login" element ={user ? <Navigate to="/" /> : <Login />} />
            <Route path="/signup" element ={user ? <Navigate to="/" /> : <Signup />} />
          </Routes>
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;
