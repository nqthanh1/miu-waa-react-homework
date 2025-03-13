import './styles/App.css'
import { PostProvider } from './context/PostContext'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <>
      <h1>WAA React Homework</h1>
      <PostProvider>
        <Dashboard />
      </PostProvider>
      
    </>
  );
}

export default App
