
function Footer() {
    return (
        <footer className="footer footer-center bg-black text-white rounded p-10">
            <aside>
                <p>
                    Posters de{" "}
                    <a className="text-red-700" href="https://moviepostermexico.com/" target="_blank" rel="noreferrer nofollow">
                        Movie Poster México
                    </a>
                </p>
                <p>Diseño basado en imágen de{" "}
                    <a className="text-red-700"
                        href="https://mx.pinterest.com/pin/1106759677165270028/" target="_blank" rel="noreferrer nofollow">
                        Pinterest
                    </a>
                </p>
            </aside>
            <nav className="space-y-4">
                <div className="grid grid-flow-col gap-4">
                    <a href="https://github.com/sebasdex/movies-seats" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-github">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </a>
                    <a href="https://sebastiandc.vercel.app/" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-globe">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                            <path d="M2 12h20" /></svg>
                    </a>
                    <a aria-disabled="true" className="text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-linkedin">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>
                </div>
                <p>{new Date().getFullYear()} - Desarrollado por{" "}
                    <a href="https://github.com/sebasdex" target="_blank" rel="noreferrer nofollow" className="text-red-700">
                        SebastianDC
                    </a>
                </p>
            </nav>
        </footer>
    )
}

export default Footer