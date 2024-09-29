import { userContext } from "./BookingContext";
import Navbar from "./Navbar";
import { useContext } from "react";

export default function Success() {
    const {lastBooking} = useContext(userContext) ;
    return(
        <>
            <Navbar />
            <h1 className="text-3xl text-center font-bold text-green-300 mt-[30vh]">Table Reservation Successful!</h1>
            <p className="text-xl text-center font-bold text-black py-4">
                Date : {lastBooking.date} <br/>
                Time : {lastBooking.time}:00 hrs <br/>
                People Attending : {lastBooking.number} <br/>
                {lastBooking.occasion ? `Occasion : ${lastBooking.occasion}` : ''}
            </p>
        </>
    )
}