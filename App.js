import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FileList from "./pages/FileList";  // Import FileList component

const App = () => {
    return (
        <Router>
            <nav className="p-4 bg-gray-800 text-white">
                <Link to="/" className="mr-4">Home</Link>
                <Link to="/files" className="mr-4">View Files</Link>
            </nav>

            <Routes>
                <Route path="/" element={<h1 className="text-center mt-4">Welcome to File Hub</h1>} />
                <Route path="/files" element={<FileList />} />  {/* Route for file listing */}
            </Routes>
        </Router>
    );
};

export default App;
