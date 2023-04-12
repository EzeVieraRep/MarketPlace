import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRuter from './router/AppRouter';

function App() {

  return (
    <>
      <Router>
        <AppRuter />
      </Router>
    </>
  )
}

export default App
