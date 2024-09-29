import BookingForm from "./BookingForm";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

export default function BookingPage() {
    const allTimes = [16, 17, 18, 19, 20, 21, 22] ;
    const [availableTimes, setAvailableTimes] = useState([]) ;
    const [bookings, setBookings] = useState({}) ;

    useEffect(()=>{
        const savedBookings = localStorage.getItem("bookings");
        if(savedBookings) setBookings(JSON.parse(savedBookings)) ;
    },[]) ;

    useEffect(()=>{
        if (Object.keys(bookings).length > 0) {
            localStorage.setItem("bookings", JSON.stringify(bookings));
        }
        console.log(bookings) ;
    },[bookings]);

    const updateTimes = (date) => {
        if(bookings[date]){
            const bookedTimes = bookings[date].map(Number) ;
            setAvailableTimes(allTimes.filter(time => !bookedTimes.includes(time)));
        }else{
            setAvailableTimes(allTimes) ;
        }
    }

    return (
        <>
            <Navbar/>
                <div className="w-full h-[90vh] flex flex-1 flex-col justify-center items-center text-center -mt-[5vh]">
                    <div className="w-[50vw] bg-primary rounded-3xl px-[1rem] py-[1rem]">
                        <h1 className="text-4xl font-heads text-secondary font-bold pb-[1rem] underline underline-offset-4">Reserve-A-Table</h1>
                        <BookingForm availableTimes={availableTimes} bookings={bookings} setBookings={setBookings} updateTimes={updateTimes} />
                    </div>
                </div>
        </>
    );
}
