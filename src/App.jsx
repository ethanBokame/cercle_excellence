import { Routes, Route } from "react-router-dom";
import './App.css'
import AccueilPage from "./pages/AccueilPage";


function App() {
  
  return (
    <Routes>
      <Route path="/" element={<AccueilPage />} />
    </Routes>
  )
}

export default App
