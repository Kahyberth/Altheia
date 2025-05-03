import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Hero } from "../components/Hero/Hero";
import { Layout } from "../components/Layout/Layout";

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
            </Routes>
        </BrowserRouter>
    )
}

export default App;
