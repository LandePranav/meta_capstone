import imga from "../icons_assets/Mario and Adrian A.jpg";
import imgb from "../icons_assets/Mario and Adrian b.jpg";

export default function About() {
    return(
        <>
            <div id="about" className="w-full px-[18vw] py-[5vh] flex justify-between">
                <div className="w-1/3">
                    <h1 className="text-4xl font-heads text-secondary font-bold">Little Lemon</h1>
                    <h3 className="text-2xl font-semibold font-heads p-1 pl-0">Chicago</h3>
                    <p className="text-justify font-paras">
                        Welcome to Little Lemon, your local spot for fresh, 
                        flavorful dishes and warm hospitality. We serve 
                        handcrafted meals made with the finest ingredients, 
                        ensuring every bite is a delight. Join us for a vibrant 
                        dining experience!
                    </p>
                </div>
                <div className="w-1/4 relative -top-10 right-20">
                    <img src={imga} alt="mario-adrian" className="rounded-3xl border border-black relative top-1/2 left-1/2" />
                    <img src={imgb} alt="mario-adrian" className="rounded-3xl border shadow-lg border-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
                </div>
            </div>
        </>
    )
}