import { useEffect, useState } from 'react';
import NavbarLogged from '../components/NavbarLogged';
import NavbarReg from '../components/NavbarReg';

const ONLINE = localStorage.getItem('isLoggedIn')

function Header() {
const [isLogged, setLoggedState] = useState(ONLINE)

useEffect(()=> {
setLoggedState(ONLINE)
console.log(isLogged)
}, [])

if (isLogged) {
  return <NavbarLogged />
} else return <NavbarReg />
}


export default Header;