import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";


const  Dashboard = lazy(() => import("./components/Dashboard"))
const  Landing = lazy(() => import("./components/Landing"))

function AllRoutesLazy() {
  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <h1 style={{ background: "red" }}> Top bar fixed</h1>
      </div>

      <Router>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Home Lazy
      </button>

      <button
        onClick={() => {
          navigate("/Dashboard");
        }}
      >
        Dashboard Lazy
      </button>
    </div>
  );
}

export default AllRoutesLazy;
