import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route 
          path="/" 
          element={<h1>Login Page</h1>} 
        />

        <Route 
          path="/dashboard" 
          element={<h1>Dashboard Page</h1>} 
        />

        <Route 
          path="/assignments" 
          element={<h1>Assignments Page</h1>} 
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;