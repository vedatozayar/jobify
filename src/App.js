import { Landing, Register, Error, Dashboard } from './pages/index';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/register' element={<Register />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
