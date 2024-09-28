import { useState } from "react";
import TestimonialCards from "./testimonialCard";

export default function Testimonials() {
    const [reviews, setReviews] = useState([
        {rating:5, name:"Alicia", comment:'Such a wonderful Place to dine in.'},
        {rating:5, name:"Ricardo", comment:'Top-notch servicing, lookingup for next time.'},
        {rating:4, name:"Virusha", comment:'Great Food.'},
        {rating:4.5, name:"Arun", comment:'Best Place in Town.'},
        {rating:5, name:"Joseph", comment:'Food that soothes the soul.'},
        {rating:5, name:"Justin", comment:'Simply loved it.'},
    ])
    return(
        <>
            <div className="w-full px-[18vw] py-[5vh] my-[4vh] bg-gray-200">
                <h2 className="w-full text-3xl text-center mb-[2vh] font-semibold">
                    Testimonials
                </h2>
                <div className="flex gap-3 overflow-x-auto scroll-smooth scroll-my-5">
                    {reviews.map(r => (
                                        <div key={r.name}>
                                            <TestimonialCards name={r.name} rating={r.rating} comment={r.comment} />
                                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}