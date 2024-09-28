import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState([16, 17, 18, 19, 20, 21, 22]) ;
    const [bookings, setBookings] = useState({}) ;
    const updateTimes = (selectedDate) => {
    }
    useEffect(()=>{console.log(bookings)},[bookings])
    return (
        <>
            <Navbar/>
                <div className="w-full h-[90vh] flex flex-1 flex-col justify-center items-center text-center -mt-[5vh]">
                    <div className="w-[50vw] bg-gray-100 rounded-3xl px-[1rem] py-[1rem]">
                        <h1 className="text-4xl text-secondary font-bold pb-[1rem] underline underline-offset-4">Reserve-A-Table</h1>
                        <BookingForm updateTimes={updateTimes} availableTimes={availableTimes} bookings={bookings} setBookings={setBookings}/>
                    </div>
                </div>
        </>
    );
}
