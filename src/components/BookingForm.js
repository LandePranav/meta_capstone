import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./BookingContext";

export default function BookingForm({ availableTimes, bookings, setBookings, updateTimes }) {
    const [number, setNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [occasion, setOccasion] = useState(null);
    const {setLastBooking} = useContext(userContext) ;
    const navigate = useNavigate();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const key = date;
        const newBookings = { ...bookings }; // Copy current bookings

        // Add time to the booking or create new booking
        if (newBookings[key]) {
            newBookings[key] = [...newBookings[key], time];
        } else {
            newBookings[key] = [time];
        }

        // Update bookings state
        await setBookings(newBookings);
        await setLastBooking({number:number, date:date, time:time, occasion:occasion}) ;
        navigate("/success") ;
    };

    useEffect(()=>{
        updateTimes(date) ;
    },[date]);

    const dateObj = new Date();
    const currDate = dateObj.getDate();
    const currMonth = dateObj.getMonth();

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const daysInCurrMonth = getDaysInMonth(dateObj.getMonth(), dateObj.getFullYear());
    const options = [];

    // Generate options for next 5 days
    for (let i = 1; i <= 5; i++) {
        const newDate = currDate + i;
        if (newDate <= daysInCurrMonth) {
            options.push({
                day: newDate,
                month: month[currMonth],
            });
        } else {
            const nextMonth = (currMonth + 1) % 12;
            const dayInNextMonth = newDate - daysInCurrMonth;
            options.push({
                day: dayInNextMonth,
                month: month[nextMonth],
            });
        }
    }

    return (
        <>
            <form className="w-[90%] font-sans mx-auto" onSubmit={handleSubmit}>
                <div className="flex py-[1rem] px-[1rem]">
                    <div className="w-1/2 text-left text-white font-semibold flex flex-col">
                        <label htmlFor="number" className="">
                            <sup className="text-red-500 font-bold text-lg">*</sup>No. of People :
                        </label>
                        <br />
                        <label htmlFor="date" className="">
                            <sup className="text-red-500 font-bold text-lg">*</sup>Date :
                        </label>
                        <br />
                        <label htmlFor="time">
                            <sup className="text-red-500 font-bold text-lg">*</sup>Time :
                        </label>
                        <br />
                        <label htmlFor="occasion">Occasion :</label>
                        <br />
                    </div>
                    <div className="w-1/2">
                        <div className="w-[80%] flex flex-col justify-center mx-auto text-primary">
                            <select
                                required
                                value={number || ""}
                                onChange={(e) => setNumber(e.target.value)}
                                id="number"
                                className="border bg-card font-bold py-1 border-black rounded-md text-center"
                            >
                                <option value="">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                                    </svg>
                                    Number of Diners
                                </option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                                <option value={6}>6</option>
                            </select>
                            <br />
                            <select
                                required
                                value={date || ""}
                                onChange={(e) => setDate(e.target.value)}
                                id="date"
                                className="bg-card font-bold rounded-md border border-black px-1 py-1 text-center"
                            >
                                <option value="">Date</option>
                                {options.map((o, idx) => (
                                    <option key={idx} value={o.day + o.month}>
                                        {o.day} {o.month}
                                    </option>
                                ))}
                            </select>
                            <br />
                            <select
                                required
                                value={time || ""}
                                onChange={(e) => setTime(e.target.value)}
                                className="bg-card font-bold py-1 text-center rounded-md border border-black"
                                id="time"
                            >
                                <option value="">Time</option>
                                {availableTimes.map((t) => (
                                    <option key={t} value={t}>
                                        {t}:00
                                    </option>
                                ))}
                            </select>
                            <br />

                            <select
                                value={occasion || ""}
                                onChange={(e) => setOccasion(e.target.value)}
                                className="bg-card font-bold py-1 text-center rounded-md border border-black"
                                id="occasion"
                            >
                                <option value="">Occasion</option>
                                <option value="BirthDay">BirthDay</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Meeting">Office-Meeting</option>
                            </select>
                            <br />
                        </div>
                    </div>
                </div>

                <button type="submit" className="bg-secondary font-bold rounded-lg p-2 w-[50%]">
                    Reserve
                </button>
            </form>
        </>
    );
}
