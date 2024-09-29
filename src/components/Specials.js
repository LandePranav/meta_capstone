import SpecialCard from "./SpecialCard";
import greekSalad from '../icons_assets/greekSalad.jpg';
import bruchetta from '../icons_assets/bruchetta.svg';
import lemonDessert from '../icons_assets/lemonDessert.jpg';

export default function Specials() {
    const specialList = [
        {title: 'Greek Salad', price: '$ 12.99', img: greekSalad,
            desc: 'The famous greek salad of crispy lettuce, peppers, olivers nad out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
        },
        {title: 'Bruchetta', price: '$ 5.99', img: bruchetta,
            desc: 'Our Bruschetta is made form grilled bread that has beensmeared with garlic and seasoned with salt and olive oil.'
        },
        {title: 'Lemon Dessert', price: '$ 5.00', img: lemonDessert,
            desc: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
        },
    ];
    return(
        <>
            <div className="px-[18vw] py-[6vh]">
                <div className="flex w-full items-center justify-between pb-[3vh]">
                    <h2 className="text-3xl font-heads font-bold">Specials</h2>
                    <button type="button" className=" bg-secondary px-3 py-1 rounded-lg font-semibold hover:bg-blue-400" >
                        Online Menu
                    </button>
                </div>
                <div className="w-full flex justify-between">
                {
                    specialList.map(i => (
                        <div key={i.title}>
                            <SpecialCard title={i.title} price={i.price} desc={i.desc} img={i.img} />
                        </div>
                    ))
                }
                </div>
            </div>
        </>
    )
}