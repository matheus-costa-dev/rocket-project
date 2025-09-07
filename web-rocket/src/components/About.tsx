import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import AnimatedTitle from "./shared/AnimatedTitle"
import { ABOUT_TEXT } from "../constans/texts"

gsap.registerPlugin(ScrollTrigger)

function About() {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            }
        })

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,

        })
    })

    return (
        <div id="sobre" className="min-h-screen w-screen text-black">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <h2 className="text-sm uppercase md:text-4xl">{ABOUT_TEXT.static_title}</h2>

                <AnimatedTitle
                    title={ABOUT_TEXT.dynamic_title}
                    containerClass="mt-5 !text-black"
                />

                <div className="absolute bottom-[-80dvh] left-1/2 w-full max-w-96 -translate-x-1/2 text-center font-circular-web text-lg md:max-w-[34rem]">
                    <p>{ABOUT_TEXT.below_text}</p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
                    <img
                        src="img/rocketParts.jpg"
                        alt="background image"
                        className="absolute left-0 top-0 size-full object-cover"

                    />
                </div>

            </div>

        </div>
    )
}

export default About