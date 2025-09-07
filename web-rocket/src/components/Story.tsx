import { useRef } from "react"
import AnimatedTitle from "./shared/AnimatedTitle"
import gsap from "gsap";
import RoundedCorners from "./shared/RoundedCorners";
import Button from "./shared/Button";
import { STORY_TEXT } from "../constans/texts";

function Story() {

    const frameRef = useRef<HTMLImageElement | null>(null)

    function handleMouseLeave() {
        const element = frameRef.current;

        gsap.to(element, {
            duration: 0.3,
            rotateX: 0,
            rotateY: 0,
            ease: "power1.inOut"

        })
    }

    function handleMouseMove(e: React.MouseEvent<HTMLImageElement, MouseEvent>) {
        const { clientX, clientY } = e;
        const element = frameRef.current;

        if (!element) return;

        const rect = element.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -20
        const rotateY = ((x - centerY) / centerX) * 20

        gsap.to(element, {
            duration: 0.3,
            rotateX, rotateY,
            transformPerspective: 500,
            ease: "power1.inOut"

        })

    }

    return (
        <section id="polo"
            className="min-h-screen w-full bg-black text-blue-50 overflow-hidden"
        >
            <div className="flex size-full flex-col items-center py-10">
                <p className="text-sm uppercase md:text-[10px]">{STORY_TEXT.pre_title}</p>
                <div className="relative size-full">
                    <AnimatedTitle
                        title={STORY_TEXT.title}
                        sectionId="#story"
                        containerClass="my-5 pb-20 pointer-events-none mix-blend-difference relative z-10"
                    />

                    <div className="relative md:h-dvh h-[90vh] w-full"
                        style={{ filter: `url("#flt_tag")` }}
                    >
                        <div
                            className="absolute left-0 top-0 size-full overflow-hidden md:left-[20%] md:top-[-10%] md:size-4/5"
                            style={{ clipPath: "polygon(4% 0, 83% 21%, 100% 73%, 0% 100%)" }}
                        >
                            <div
                                className="absolute w-full md:h-dvh h-[50dvh] opacity-100 left-10 top-16 md:left-0 md:top-10 lg:left-[-300px] lg:top-[-100px]"
                                style={{ transform: "translate3d(0, 0, 0) rotateX(0) rotateY(0) rotateZ(0) scale(1)" }}
                            >
                                <img
                                    ref={frameRef}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseUp={handleMouseLeave}
                                    onMouseEnter={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                    src="/img/marica.jpg"
                                    alt="Maricá"
                                    className="object-contain w-full"
                                />

                            </div>
                        </div>

                        <RoundedCorners />

                    </div>

                </div>

                <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
                    <div className="flex h-full w-fit flex-col items-center md:items-start">
                        <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                            {STORY_TEXT.below_text}
                        </p>
                        <Button
                            id="realm-button"
                            title={STORY_TEXT.button_title}
                            containerClass="mt-5"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Story