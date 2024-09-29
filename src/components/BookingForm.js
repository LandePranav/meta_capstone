import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ availableTimes, bookings, setBookings, updateTimes }) {
    const [number, setNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [occasion, setOccasion] = useState(null);

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
        navigate("/success") ;
    };

    useEffect(()=>{
        updateTimes(date) ;
    },[date, updateTimes]);

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
            <form className="w-[90%] font-paras mx-auto" onSubmit={handleSubmit}>
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
                        <div className="w-[80%] flex flex-col justify-center mx-auto">
                            <select
                                required
                                value={number || ""}
                                onChange={(e) => setNumber(e.target.value)}
                                id="number"
                                className="border py-1 border-black rounded-md text-center"
                            >
                                <option value="">Number</option>
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
                                className="rounded-md border border-black px-1 py-1 text-center"
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
                                className="py-1 text-center rounded-md border border-black"
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
                                className="py-1 text-center rounded-md border border-black"
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

                <button type="submit" className="bg-secondary rounded-lg p-2 w-[50%]">
                    Reserve
                </button>
            </form>
        </>
    );
}
