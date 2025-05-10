import Dashboard from "@/pages/dashboard-page";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./guards/PrivateRoute";
import PublicRoute from "./guards/PublicRoute";
import LandingPage from "./pages/landing-page";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <LandingPage />
          </PublicRoute>
        }
      >
        <Route path="/features" element={<div>Features Content</div>} />
        <Route path="/about" element={<div>About Content</div>} />
        <Route path="/contact" element={<div>Contact Content</div>} />
      </Route>
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
