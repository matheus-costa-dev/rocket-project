import { useEffect, useRef } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar o plugin
gsap.registerPlugin(ScrollTrigger);

type animatedTitle = {
    title: string,
    containerClass?: string,
    sectionId?: string
}

function AnimatedTitle({ title, containerClass, sectionId }: animatedTitle) {
    // Corrigido: containerRef em vez de conatinerRef
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse",
                }
            })

            titleAnimation.to(".animated-word", {
                opacity: 1,
                // Corrigido: translate3d em vez de translateY
                transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.02,
            })
        }, containerRef) // Corrigido: containerRef

        return () => ctx.revert();
    }, [])

    return (
        <div 
            id={sectionId}
            ref={containerRef} // Adicionado: ref no container
            className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] text-white sm:px-32 md:text-[6rem] ${containerClass}`}
        >
            {
                title.split("<br />").map((line, index) => (
                    <div key={index} className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                        {line.split(" ").map((word, i) => (
                            <span key={i}
                                className="animated-word font-black opacity-0"
                                dangerouslySetInnerHTML={{ __html: word }}
                            />
                        ))}
                    </div>
                ))
            }
        </div>
    )
}

export default AnimatedTitle