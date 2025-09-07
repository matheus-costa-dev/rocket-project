import BentoCard from "./shared/BentoCard"
import BentoTilt from "./shared/BentoTilt"
import { FEATURES_TEXT } from "../constans/texts"

function Features() {
    return (
        <section className="bg-black pb-52" id="info">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="text-lg text-blue-50">
                        {FEATURES_TEXT.above_card.title}
                    </p>

                    <p className="max-w-md text-lg text-blue-50 opacity-50">
                        {FEATURES_TEXT.above_card.text}
                    </p>
                </div>

                <BentoTilt className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-sm md:h-[65vh]">
                    <BentoCard
                        src="videos/feature-1.mp4"
                        title={FEATURES_TEXT.cards.up_card.title}
                        description={FEATURES_TEXT.cards.up_card.description}
                    />
                </BentoTilt>

                <div className="grid gap-4 md:grid-cols-2 w-full h-full">
                    <BentoTilt className="flex flex-col gap-4">
                        <BentoCard
                            src="videos/feature-2.mp4"
                            title={FEATURES_TEXT.cards.left1_card.title}
                            description={FEATURES_TEXT.cards.left1_card.description}
                        />

                    </BentoTilt>

                    <div className="flex flex-col gap-4">

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-3.mp4"
                                title={FEATURES_TEXT.cards.right1_card.title}
                                description={FEATURES_TEXT.cards.right1_card.description}
                                containerClassTitle="sm:!text-4xl"
                                containerClassDescription="text-black font-bold"
                            />
                        </BentoTilt>

                        <BentoTilt>
                            <BentoCard
                                src="videos/feature-4.mp4"
                                title={FEATURES_TEXT.cards.right2_card.title}
                                description={FEATURES_TEXT.cards.right2_card.description}
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
                                {FEATURES_TEXT.cards.left2_card.title}
                            </h1>
                            {FEATURES_TEXT.cards.left2_card.element}
                        </div>
                    </BentoTilt>


                    {/* Coluna direita */}
                    <BentoTilt className="w-full md:w-1/2 h-full">
                        <BentoCard
                            src="videos/feature-5.mp4"
                            title={FEATURES_TEXT.cards.right3_card.title}
                            description={FEATURES_TEXT.cards.right3_card.description}
                            containerClassTitle="sm:!text-4xl"
                        />

                    </BentoTilt>
                </div>



            </div>
        </section>
    )
}

export default Features