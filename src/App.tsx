import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <h1>WAA React Homework</h1>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
      
    </>
  );
}

export default App
