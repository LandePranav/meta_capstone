import logo from '../icons_assets/Logo.svg'
export default function Footer() {
    return(
        <>
        <ul className="flex font-paras justify-evenly bg-slate-400 py-5 mt-[4vh]">
            <li className='flex items-center'><img src={logo} alt='logo' className='scale-150' /></li>
            <li>
                <ul className="text-center">
                    <li><b>Doormat Nav</b></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </li>
            <li>
                <ul className="text-center">
                    <li><b>Contact</b></li>
                    <li>Address</li>
                    <li>Phone No.</li>
                    <li>Email</li>
                </ul>
            </li>
            <li>
                <ul className="text-center">
                    <li><b>Social Media Links</b></li>
                    <li>X</li>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </li>
        </ul>
        </>
    ) ;
}