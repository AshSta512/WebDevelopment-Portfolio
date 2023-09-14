import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import {useState} from "react";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise Manager</h1>
        <p>You can view and manage exercises here!</p>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage setExerciseToEdit={setExerciseToEdit} />}></Route>
            <Route path="/create" element={<CreatePage />}></Route>
            <Route path="/edit" element={<EditPage exerciseToEdit={exerciseToEdit} />}></Route>
          </Routes>
        </Router>
      </header>
      <footer>
        <p>© 2023 Ashton Stasko</p>
      </footer>
    </div>
  );
}

export default App;
