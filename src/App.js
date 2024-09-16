
import './App.css';
import HomePage from './pages/home/HomePage';
import StudentPage from './pages/studentPage/StudentPage';
import { BrowserRouter as Router, Routes, Route ,Link} from "react-router-dom";
function App() {
  return (
    <div className="App">
          <Router>
                <Routes>
                    <Route path="/student" element={<StudentPage />}></Route>
                    <Route index element={<HomePage />}></Route>
                    
                </Routes>
            </Router>
    </div>
  );
}

export default App;
