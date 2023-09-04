
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';  


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
