import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Create from './component/Create';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
    </div>
  );
}

export default App;
