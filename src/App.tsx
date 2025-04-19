import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MainPage from "./components/MainPage";
import TitlePage from "./components/TitlePage";
import DynamicPage from "./components/DynamicPage";

export default function App() {
    return (
        <Router>
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/titlePage" element={<TitlePage />} />
                    <Route path="/:titlePage" element={<DynamicPage />} />
                </Routes>
            </AnimatePresence>
        </Router>
    );
}
