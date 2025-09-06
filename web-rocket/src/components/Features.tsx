import { TiLocationArrow } from "react-icons/ti"
import BentoCard from "./BentoCard"
import BentoTilt from "./BentoTilt"

function Features() {
    return (
        <section className="bg-black pb-52" id="info">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="text-lg text-blue-50">
                        Explorando a Robótica
                    </p>

                    <p className="max-w-md text-lg text-blue-50 opacity-50">
                        Mergulhe em um universo científico em constante expansão,
                        onde tecnologia, inovação e engenharia se unem em uma
                        experiência integrada que transforma o seu mundo.
                    </p>
                </div>

                <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-sm md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={<>Mat<b>e</b>riais</>}
                        description="Estrutura do foguete, Arduino, sensores, bateria, módulos de comunicação e todos os componentes utilizados no projeto."
                    />
                </BentoTilt>

                <div className="grid gap-4 md:grid-cols-2 w-full h-full">
                    <BentoTilt className="flex flex-col gap-4">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={<>Proj<b>e</b>tos</>}
                            description="Lista completa de projetos criados no universo da robótica e exploração."
                        />

                    </BentoTilt>

                    <div className="flex flex-col gap-4">

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-3.mp4"
                                title={<>Participantes</>}
                                description="Todos que colaboraram pra tornar esse projeto possível."
                                containerClassTitle="sm:!text-4xl"
                                containerClassDescription="text-black font-bold"
                            />
                        </BentoTilt>

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-4.mp4"
                                title={<>Parcerias</>}
                                description="Instituições e apoiadores que financiaram e tornaram este projeto possível."
                                containerClassTitle="sm:!text-4xl"
                                containerClassDescription="text-black font-bold"
                            />

                        </BentoTilt>

                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center gap-2 h-64 mt-2">
                    {/* Coluna esquerda */}
                    <BentoTilt className="bg-violet-900 w-full md:w-1/2 h-full flex flex-col justify-between">
                        <div className="flex flex-col justify-between h-full mt-3 ml-1">
                            <h1 className="font-black text-3xl text-black mt-3 ml-1 self-start flex-wrap w-1/3">
                                mais em breve
                            </h1>
                            <TiLocationArrow className="text-3xl m-3 self-end text-black" />
                        </div>
                    </BentoTilt>


                    {/* Coluna direita */}
                    <BentoTilt className="w-full md:w-1/2 h-full">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={<>Incubadora Maricá</>}
                            description="Venha aprender e inovar"
                            containerClassTitle="sm:!text-4xl"
                        />

                    </BentoTilt>
                </div>



            </div>
        </section>
    )
}

export default Features