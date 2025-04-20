import { BrowserRouter as Router } from "react-router-dom";

import './App.css';
import Layout from "./components/layout.tsx";

export default function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}
