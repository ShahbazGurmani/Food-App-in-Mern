
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';  


function App() {
  return (
    <Router>
      <div className='bg-dark'>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
