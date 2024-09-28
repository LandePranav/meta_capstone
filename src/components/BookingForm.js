import { useState } from "react";

export default function BookingForm({availableTimes, bookings, setBookings}) {
    const [number, setNumber] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null) ;
    const [occasion, setOccasion] = useState(null) ;

    const handleSubmit = (e) => {
        e.preventDefault() ;
        setBookings({...bookings, date: [time]}) ;
    }

    return(
        <>
            <form className="w-[90%] mx-auto" onSubmit={handleSubmit}>
                <div className="flex py-[1rem] px-[1rem]">
                    <div className="w-1/2 text-left font-semibold flex flex-col">
                        <label htmlFor="number">No. of People : </label> <br/>
                        <label htmlFor="date">Date : </label><br/>
                        <label htmlFor="time">Time : </label><br/>
                        <label htmlFor="occasion">Occasion : </label><br/>
                    </div>
                    <div className="w-1/2">
                    <div className="w-[80%] flex flex-col justify-center mx-auto">
                    <input value={number || ""} onChange={e => {setNumber(e.target.value)}} type="number" name="number" className="border border-black rounded-md text-center" />
                    <br />
                    <input value={date || ""} onChange={e => {setDate(e.target.value)}} type="date" name="date" className="rounded-md border border-black px-1 text-center" />
                    <br/>
                    <select value={time || ""} onChange={(e) => {setTime(e.target.value)}} className="text-center rounded-md border border-black" >
                        <option value=" ">select</option>
                        {
                            availableTimes.map(t => (
                                <option key={t} value={t}>{t}:00</option>
                            ))
                        }
                    </select>
                    <br />

                    <select value={occasion || ""} onChange={e => setOccasion(e.target.value)} className="text-center rounded-md border border-black">
                        <option value="">select</option>
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