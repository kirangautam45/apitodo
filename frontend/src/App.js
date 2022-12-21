import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToDo from './pages/ToDo'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  UpdateToDo  from "./pages/updateToDo";
 

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path="/update/:id" element={<UpdateToDo />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;
