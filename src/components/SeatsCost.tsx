import { useNavigate } from "react-router"
function SeatsCost() {
    const navigate = useNavigate()
    return (
        <section className="flex flex-col absolute -top-64 left-50">
            <article className="h-[30rem] w-80 bg-black">
                <img src="https://moviepostermexico.com/cdn/shop/products/inception_ver2_xxlg_1024x1024@2x.jpg?v=1574870710"
                    alt="movie" className="h-full w-full object-cover object-top" />
            </article>
            <article className="my-8 flex flex-col gap-2 p-2">
                <div className="flex items-center justify-between gap-4 p-2 border">
                    <p className="flex-1">Asiento: A2</p>
                    <p className="text-gray-400">$80</p>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
                <div className="flex items-center justify-between gap-4 p-2 border">
                    <p className="flex-1">Asiento: A2</p>
                    <p className="text-gray-400">$80</p>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
                <div className="flex items-center justify-between gap-4 p-2 border">
                    <p className="flex-1">Asiento: A2</p>
                    <p className="text-gray-400">$80</p>
                    <button className="">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    </button>
                </div>
                <div className="flex justify-end">
                    <p className="p-2 text-white/30">Total:
                        <span className="text-white ml-2 text-xl">$80</span>
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-8">
                    <button className="btn btn-outline btn-error" onClick={() => navigate("/")}>Cancelar</button>
                    <button className="btn btn-outline btn-error">Reservar</button>
                </div>
            </article>
        </section>
    )
}

export default SeatsCost