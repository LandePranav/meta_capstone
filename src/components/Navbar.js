import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../icons_assets/Logo.svg"
export default function Navbar() {
    const [selected, setSelected] = useState() ;
    return(
        <>
            <nav className="w-full font-heads flex justify-between items-center px-[4rem] py-[1rem] font-semibold overflow-x-auto">
                <Link to='/'>
                    <img src={logo} alt="logo" />
                </Link>
                <ul className="flex w-3/4 justify-evenly text-center">
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]"><Link to='/' className="block">Home</Link></li>
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]"><a href="/#about" className="block">About</a> </li>
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]">Menu</li>
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]"><Link to="/booking" className="block">Reservations</Link> </li>
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]">Order-Online</li>
                    <li className="hover:bg-primary hover:text-white block w-full rounded-lg py-[1vh]">Login</li>
                </ul>
            </nav>
        </>
    );
}