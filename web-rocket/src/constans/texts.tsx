import { TiLocationArrow } from "react-icons/ti"

export const NAV_ITEMS = [
    {name: "Home", href:"video-frame"},
    {name: "Clima", href: "climate"},
    {name: "Sobre", href:"sobre"},
    {name: "Informações", href:"info"},
    {name: "Polo", href:"polo"},
    {name: "Contato", href:"contato"},
]

export const HERO_TEXT = {
    title: "Projeto Foguete",
    content: "Um projeto realizado a fim de aplicar o aprendizado em robotico",
    right_label: "Incubadora Maricá",
}

export const ABOUT_TEXT = {
    static_title: "Bem vindo ao projeto",
    dynamic_title: "O futuro da robotica",
    below_text: <>A jornada rumo ao espaço começa aqui <br/> Unindo robótica, inovação e exploração sem limites</>,
}

export const FEATURES_TEXT = {
    above_card: {
        title:  "Explorando a Robótica",
        text: "Mergulhe em um universo científico em constante expansão, onde tecnologia, inovação e engenharia se unem em uma experiência integrada que transforma o seu mundo."
    },
    cards: {
        up_card: {
            title: <>Mat<b>e</b>riais</>,
            description: "Estrutura do foguete, Arduino, sensores, bateria, módulos de comunicação e todos os componentes utilizados no projeto."
        },
        left1_card: {
            title: <>Proj<b>e</b>tos</>,
            description: "Lista completa de projetos criados no universo da robótica e exploração."
        },
        left2_card: {
            title: "mais em breve",
            element: <TiLocationArrow className="text-3xl m-3 self-end text-black" /> 
        },
        right1_card: {
            title: <>Participantes</>,
            description: "Todos que colaboraram pra tornar esse projeto possível."
        },
        right2_card: {
            title: <>Parcerias</>,
            description: "Instituições e apoiadores que financiaram e tornaram este projeto possível."
        },
        right3_card: {
            title: <>Incubadora Maricá</>,
            description:"Venha aprender e inovar"
        },

    }
}


export const STORY_TEXT = {
    pre_title: "Iniciativa de aprendizado",
    title: "Futuro de",
    below_text: "Onde novas ideias e oportunidades ganham vida",
    button_title: "Descubra novas possibilidades"
}

export const CONTACT_TEXT = {
    up_text: "Junte-se a nós",
    main_text:"Vamos construir um novo caminho de possibilidades",
    button_text: "Entre em contato" ,
}

export const FOOTER_TEXT = {
    left_text : "© Incubadora 2025. Todos os direitos reservados.",
    right_text: "Politica de privacidade"
}