import { createContext } from "react"

export default function BookingContext() {
    const userContext = createContext() ;
    const contextProvider = ({children}) => {
        <userContext.Provider>
            {children}
        </userContext.Provider>
    }
    
    return
}