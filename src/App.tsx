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
import { ClinicRegisterPage } from "./pages/clinic-register-page";
import Home from "./pages/hero-page";
import StaffDashboardPage from "./pages/staff-dashboard-page";
import SuccessPage from "./pages/sucess-page";
import ReceptionistPage from "./pages/Receptionist/receptionist-page";
import AppointmentManagement from "./pages/Receptionist/appointment-management";
import AppointmentPage from "./pages/Receptionist/appointment-management";
import NewAppointmentPage from "./components/Dashboard/receptionist/appointment/new-appointment";
import PatientsPage from "./pages/Receptionist/patients-management";
import LabResultsPage from "./pages/Receptionist/lab-results";

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
      case "staff":
        return <Navigate to="/staff/dashboard" />;
      case "receptionist":
        return <Navigate to="/receptionist/dashboard" />;
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
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/register-clinic"
        element={
          <PublicRoute>
            <ClinicRegisterPage onSubmit={() => {}} />
          </PublicRoute>
        }
      />
      <Route
        path="/register-clinic/success"
        element={
          <PublicRoute>
            <SuccessPage />
          </PublicRoute>
        }
      />
      <Route path="/features" element={<div>Features Content</div>} />
      <Route path="/about" element={<div>About Content</div>} />
      <Route path="/contact" element={<div>Contact Content</div>} />

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
        path="/staff/dashboard"
        element={
          <ProtectedRoute role="staff">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<StaffDashboardPage />} />
      </Route>

      <Route
        path="/receptionist/dashboard"
        element={
          <ProtectedRoute role="receptionist">
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<ReceptionistPage />} />
        <Route path="appointment-management" element={<AppointmentPage />} />
        <Route path="appointment-management/new" element={<NewAppointmentPage />} />
        <Route path="patients-management" element={<PatientsPage />} />
        <Route path="lab-results" element={<LabResultsPage />} />
      </Route>

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
