import { Link } from "react-router-dom" ;

export default function Hero() {
    return(
        <div className="flex px-[18vw] py-[5vh] bg-primary">
            <div className="w-2/3">
                <h1 className="text-4xl text-secondary font-bold">Little Lemon</h1>
                <h3 className="text-2xl text-white font-semibold p-1 pl-0">Chicago</h3>
                <p className="w-4/5 text-white text-justify p-1 pl-0">
                We are a family owned Mediterranean restaurant, focused
                on traditional recipes sever with a modern twist.
                </p>
                <Link to="/booking">
                    <button type="button" className="bg-secondary px-3 py-1 mt-3 rounded-lg font-semibold hover:bg-blue-400" >
                        Reserve a Table
                    </button>
                </Link>
            </div>
            <div className="w-1/3 my-auto flex items-center justify-end">
                <img src="./ogResto.jpeg" alt="Resto Img" className="w-48 aspect-square rounded-lg"  />
            </div>
        </div>
    )
}