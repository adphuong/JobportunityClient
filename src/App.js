import './styles/App.css';
import './index.css'


// Configure routing
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from './hooks/useAuthContext';
import AddJob from "./components/AddJob";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Homepage from "./pages/Homepage";

function App() {

  const { user } = useAuthContext()

  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={user ? <Homepage /> : <Navigate to="/login" /> } />
            <Route path="/add-job" element={<AddJob />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to ="/" />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
