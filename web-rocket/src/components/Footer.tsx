import { EXTERNAL_LINKS } from "../constans/links"
import { FOOTER_TEXT } from "../constans/texts"


function Footer() {
    return (
        <footer className="w-screen bg-violet-300 py-4 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    {FOOTER_TEXT.left_text}
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {EXTERNAL_LINKS.redes_sociais.map((link, index) => (
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
                    {FOOTER_TEXT.right_text}
                </a>
            </div>
        </footer>
    )
}

export default Footer