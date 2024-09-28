import { Link } from "react-router-dom";
import logo from "../icons_assets/Logo.svg"
export default function Navbar() {
    return(
        <>
            <nav className="w-full flex justify-between items-center px-[4rem] py-[1rem] font-semibold overflow-x-auto">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <ul className="flex w-3/4 justify-evenly text-center">
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]"><Link to='/' className="block">Home</Link></li>
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]"><a href="/#about" className="block">About</a> </li>
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]">Menu</li>
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]"><Link to="/booking" className="block">Reservations</Link> </li>
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]">Order-Online</li> 
                    <li className="hover:bg-blue-300 block w-full rounded-lg py-[1vh]">Login</li>
                </ul>
            </nav>
        </>
    );
}