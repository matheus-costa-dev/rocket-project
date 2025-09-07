import { FaDiscord, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"

export const EXTERNAL_LINKS = {
    github: "https://github.com/matheus-costa-dev/rocket-project",
    incubadora: "https://incubacultura.org.br/",
    redes_sociais: [
        {name: "discord", href: "https://discord.com/", icon: <FaDiscord /> },
        {name: "twitter", href: "https://x.com/", icon: <FaTwitter />},
        {name: "github", href: "https://github.com/", icon: <FaGithub />},
        {name: "instagram", href: "https://www.instagram.com/", icon: <FaInstagram />},
    ]
}