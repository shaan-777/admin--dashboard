// // src/App.jsx
// // ====================
// import React from 'react'
// import AdminDashboard from './components/AdminDashboard'
// import './App.css'

// function App() {
//   return (
//     <div className="App">
//       <AdminDashboard />
//     </div>
//   )
// }

// export default App;
// src/App.jsx
import React from "react";
import AdminDashboard from "./components/AdminDashboard";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      <AdminDashboard />
    </div>
  );
}

export default App;
