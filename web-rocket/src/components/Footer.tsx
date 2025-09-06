import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from "react-icons/fa"

const links = [
    { href: "https://www.discord.com", icon: <FaDiscord /> },
    { href: "https://www.twitter.com", icon: <FaTwitter /> },
    { href: "https://www.github.com", icon: <FaGithub /> },
    { href: "https://www.twitch.com", icon: <FaTwitch /> },
]

function Footer() {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    © Incubadora 2025. Todos os direitos reservados.
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link, index) => (
                        <a 
                        key={index} 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-black transition-colors duration-500 ease-in-out hover:text-white"
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>
                <a href="#privacy-policy" 
                className="text-center text-sm hover:underline md:text-right">
                    Politica de privacidade
                </a>
            </div>
        </footer>
    )
}

export default Footer