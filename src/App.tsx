import RequestAppointmentPage from "@/components/Dashboard/patient/request-appointment";
import PatientDashboardPage from "@/pages/patient-dashboard-page";
import PatientProfilePage from "@/pages/patient-profile-page";
import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {
  default as PrivateRoute,
  default as ProtectedRoute,
} from "./guards/PrivateRoute";
import PublicRoute from "./guards/PublicRoute";
import Layout from "./layout/layout";
import LandingPage from "./pages/landing-page";

function App() {
  const { user } = useContext(AuthContext);

  const RedirectByRole = () => {
    if (!user) return <Navigate to="/login" />;
    console.log("userRole", user?.role);

    switch (user?.role) {
      case "physician":
        return <Navigate to="/physician/dashboard" />;
      case "patient":
        return <Navigate to="/patient/dashboard" />;
      case "admin":
        return <Navigate to="/admin/dashboard" />;
      case "secretary":
        return <Navigate to="/secretary/dashboard" />;
      case "superadmin":
        return <Navigate to="/superadmin/dashboard" />;
      default:
        return <Navigate to="/unauthorized" />;
    }
  };

  return (
    <Routes>
      {/* Rutas públicas */}
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

      {/* Rutas protegidas */}
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <RedirectByRole />
          </PrivateRoute>
        }
      />

      <Route
        path="/patient/dashboard"
        element={
          <ProtectedRoute role="patient">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<PatientDashboardPage />} />
        <Route path="appointments" element={<RequestAppointmentPage />} />
        <Route path="profile" element={<PatientProfilePage />} />
      </Route>
    </Routes>
  );
}

export default App;
