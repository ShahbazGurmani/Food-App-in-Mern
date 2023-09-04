
import './App.css';
import Home from './screens/Home';
import {Link , BrowserRouter as router , Route, Router, Routes,} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element ={<Home/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
