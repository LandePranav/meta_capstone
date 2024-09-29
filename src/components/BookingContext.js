import {createContext, useState } from "react"
export const userContext = createContext() ;

export default function BookingContext({children}) {
    const [lastBooking, setLastBooking] = useState({});

    return(
        <userContext.Provider value={{lastBooking, setLastBooking}}>
            {children}
        </userContext.Provider>
    );
}