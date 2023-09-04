
import './App.css';
import Home from './screens/Home';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Route,Routes
} from 'react-router-dom';  


function App() {
  return (
    <div className='bg-dark'>
    <Router >
      <div>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/login' element={<Login/>} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
