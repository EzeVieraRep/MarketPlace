import { useEffect, useState } from 'react';
import NavbarLogged from '../components/NavbarLogged';
import NavbarReg from '../components/NavbarReg';

const ONLINE = localStorage.getItem('isLoggedIn')

function Header() {
const [isLogged, setLoggedState] = useState(ONLINE)

  if (isLogged === true) {
    return <NavbarLogged />
  } else return <NavbarReg />
}


export default Header;