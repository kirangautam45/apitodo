import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDo from './pages/ToDo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
