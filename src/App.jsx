import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

function App() {

  return (
    <>
      <Router>
      <Header />
        <AppRouter />
      </Router>
    </>
  )
}

export default App
