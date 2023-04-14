import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/views/Header';

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
