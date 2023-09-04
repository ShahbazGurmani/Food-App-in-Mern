
import './App.css';
import Home from './screens/Home';
import {Link , BrowserRouter as router , Route, Router, Routes,} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact  path='/' element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
