import { useState } from 'react';
import NavbarLogged from '../components/NavbarLogged';
import NavbarReg from '../components/NavbarReg';

function Header() {
const [isLogged, setLoggedState] = useState(false)


  return (
    !isLogged ? <NavbarReg /> : <NavbarLogged />
  );
}

export default Header;