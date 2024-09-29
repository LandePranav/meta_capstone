export default function SpecialCard({title, price, desc, img}) {
    return(
        <>
            <div className="w-[20vw] h-[40vh] border border-black rounded-lg bg-card flex flex-col overflow-hidden">
                <div className="w-full h-[50%] border border-black rounded-lg overflow-hidden">
                    <img src={img} loading="lazy" alt="food img" className="w-full h-full rounded-lg object-cover" />
                </div>
                <div className="px-[1vw] h-[60%] flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <p className="text-xl font-heads font-semibold pt-[1vh]">{title}</p>
                        <p className="italic font-sans text-money">{price}</p>
                    </div>
                    <p className="text-justify font-paras text-sm pt-[1vh]">{desc}</p>
                    <p className="align-bottom mt-auto font-semibold text-sm py-[1vh]">Order a Delivery</p>
                </div>
            </div>
        </>
    );
}