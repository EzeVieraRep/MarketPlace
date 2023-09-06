import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from './router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/views/Header';
import UserState from './context/userContext/UserState'

function App() {

  return (
    <>
      <UserState>
        <Router>
          <Header />
          <AppRouter />
        </Router>
      </UserState>
    </>
  )
}

export default App
