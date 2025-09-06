import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import { TiLocationArrow } from "react-icons/ti"
import { useWindowScroll } from "react-use"
import gsap from "gsap"

const navItems = [
    {name: "Home", href:"video-frame"},
    {name: "Sobre", href:"sobre"},
    {name: "Informações", href:"info"},
    {name: "Polo", href:"polo"},
    {name: "Contato", href:"contato"},
]

function Navbar() {


    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [hasFloatingStyle, setHasFloatingStyle] = useState(false);

    const navContainerRef = useRef<HTMLDivElement | null>(null);
    const audioElementRef = useRef<HTMLAudioElement | null>(null);

    const { y: currentScrollY } = useWindowScroll()

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            setHasFloatingStyle(false);
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            setHasFloatingStyle(true);
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            setHasFloatingStyle(true);
        }

        setLastScrollY(currentScrollY)
    }, [currentScrollY, lastScrollY])

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        })
    }, [isNavVisible])

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current?.play()
        } else {
            audioElementRef.current?.pause()
        }
    }, [isAudioPlaying])


    function toggleAudioIndicator() {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    }

    return (
        <div
            ref={navContainerRef}
            className={`fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6
            ${hasFloatingStyle ? "bg-black rounded-lg border" : ""} }
            `}>
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    <div className="flex items-center gap-7">
                        <img src="/img/logo.png" alt="Logo" className="w-50" />
                        <Button
                            id="site-incubadora"
                            title="Acesse"
                            rightIcon={<TiLocationArrow />}
                            containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            onClickButton={()=>window.location.href="https://incubacultura.org.br/"}
                        />
                    </div>
                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => (
                                <a
                                    className="relative ms-10 font-general text-xs uppercase text-blue-50 after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer"
                                    href={`#${item.href.toLocaleLowerCase()}`}
                                    key={index}>{item.name}</a>
                            ))}
                        </div>

                        <button
                            className="ml-10 flex items-center space-x-0.5"
                            onClick={toggleAudioIndicator}
                        >
                            <audio
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                                ref={audioElementRef}
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={`py-1 h-1 w-px rounded-full bg-white transition-all duration-200 ease-in-out indicator-line ${isIndicatorActive ? "active" : ""}`}
                                    style={{ animationDelay: `${bar * 0.1}s` }}
                                />
                            ))}
                        </button>

                    </div>
                </nav>

            </header>

        </div>
    )
}

export default Navbar