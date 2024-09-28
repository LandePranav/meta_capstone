import TestimonialCards from "./testimonialCard";

export default function Testimonials() {
    return(
        <>
            <div className="w-full px-[18vw] py-[5vh] bg-gray-200">
                <h2 className="w-full text-3xl text-center mb-[2vh] font-semibold">
                    Testimonials
                </h2>
                <TestimonialCards />
            </div>
        </>
    )
}