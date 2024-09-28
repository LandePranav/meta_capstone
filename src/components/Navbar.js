import logo from "../icons_assets/Logo.svg"
export default function Navbar() {
    return(
        <>
            <nav className="flex justify-between items-center px-10 py-5 font-semibold position-absolute top-0 z-50">
                <img src={logo} alt="logo" />
                <ul className="flex w-3/4 justify-evenly">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order-Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </>
    );
}