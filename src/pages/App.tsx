import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Layout } from "../components/Layout/Layout";
import { Dashboard } from "./Dashboard";
import { NavbarMinimal } from "../components/Navbar/Navbar";
import { Patients } from "./Patients";
import { Schedule } from "./Schedule";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Hero />} />
                    <Route path="/features" element={<div>Features Content</div>} />
                    <Route path="/about" element={<div>About Content</div>} />
                    <Route path="/contact" element={<div>Contact Content</div>} />
                </Route>
                <Route element={<NavbarMinimal />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/patients" element={<Patients />} />
                    <Route path="/schedule" element={<Schedule />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
