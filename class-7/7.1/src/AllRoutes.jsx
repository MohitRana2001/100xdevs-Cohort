import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"





function AllRoutes() {

  return (
    <div>
      <div style={{marginBottom: 10}}>
        <h1 style={{background: "red"}}> Top bar fixed</h1>
      </div>

      <BrowserRouter >
        <Appbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
};


function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => {
        navigate("/dashboard");
      }}>Dashboard</button>

      <button onClick={() => {
        navigate("/");
      }}>Home</button>
      
    </div>
  )
}



export default AllRoutes;
