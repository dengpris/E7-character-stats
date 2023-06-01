import './App.css';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='bg-dark text-white'>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
