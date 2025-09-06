import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hoverIndex, setHoverIndex] = useState(2);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const totalVideos = 4;
  const currentVideoRef = useRef<HTMLVideoElement | null>(null);
  const nextVideoRef = useRef<HTMLVideoElement | null>(null);

  useGSAP(() => {
    if (hasClicked) {
      // Preparar o vídeo de expansão (cópia que vai expandir)
      gsap.set("#expanding-video", {
        visibility: "visible",
        scale: 0.2, // Começa pequeno como o hover video
        zIndex: 45
      });

      // Fade out do vídeo atual (suave)
      gsap.to("#current-video", {
        opacity: 0.3,
        duration: 0.5,
        ease: "power1.out"
      });

      // Expansão do vídeo duplicado até a tela toda
      gsap.to("#expanding-video", {
        transformOrigin: "center center",
        scale: 1, // Expande de 0.2 para 1 (tela toda)
        duration: 1.2,
        ease: "power1.inOut",
        onStart: () => {
          // Play do vídeo que está expandindo
          const expandingVideo = document.querySelector("#expanding-video video") as HTMLVideoElement;
          expandingVideo?.play();
        },
        onComplete: () => {
          // Fade in do novo vídeo de fundo e limpar
          gsap.to("#current-video", {
            opacity: 1,
            duration: 0.5,
            ease: "power1.in"
          });

          // Esconder o vídeo de expansão
          gsap.set("#expanding-video", {
            visibility: "hidden",
            scale: 0.2
          });
        }
      });
    }
  }, {
    dependencies: [currentIndex],
    revertOnUpdate: true,
  })

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 97%)",
      borderRadius:"0% 0% 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    })
  })

  useEffect(() => {
  const videos: HTMLVideoElement[] = [];

  for (let i = 1; i <= totalVideos; i++) {
    const video = document.createElement("video");
    video.src = getVideoSrc(i);
    video.muted = true;
    video.preload = "auto";
    video.onloadeddata = () => {
      setLoadedVideos(prev => prev + 1);
    };
    videos.push(video);
  }

  return () => {
    // cleanup
    videos.forEach(v => v.src = "");
  };
}, []);

  useEffect(()=>{
    if (loadedVideos >= totalVideos) {
      setIsLoading(false);
    }
  }, [loadedVideos])

  function getVideoSrc(index: number) {
    return `videos/hero-${index}.mp4`;
  }

  function handleMiniVideoClick() {
    const nextIndex = hoverIndex; // vídeo que será exibido
    setCurrentIndex(nextIndex);   // fundo também recebe esse vídeo
    setHoverIndex((prev) => (prev < totalVideos ? prev + 1 : 1));
    setHasClicked(true);
  }

  function handleVideoLoad() {
    setLoadedVideos((prev) => prev + 1);
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-white">
      
      {isLoading && (
        <div className="flex justify-center items-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      
      {/* Container com clip-path para o vídeo */}
      <div
        id="video-frame"
        className="absolute inset-0 w-full h-full bg-black"
      >
        {/* vídeo de fundo */}
        <video
          id="current-video"
          ref={currentVideoRef}
          src={getVideoSrc(currentIndex)}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          onLoadedData={handleVideoLoad}
        />

        {/* vídeo central (hover) */}
        <div className="absolute inset-0 flex justify-center items-center z-40">
          <div
            className="cursor-pointer overflow-hidden rounded-lg scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            onClick={handleMiniVideoClick}
          >
            <video
              id="next-video"
              ref={nextVideoRef}
              src={getVideoSrc(hoverIndex)}
              className="w-64 h-64 object-cover rounded-lg"
              loop
              muted
              autoPlay
            />
          </div>
        </div>

        {/* Vídeo de expansão - cobre a tela toda */}
        <div
          id="expanding-video"
          className="absolute inset-0 w-full h-full flex justify-center items-center"
          style={{
            visibility: 'hidden',
            transformOrigin: 'center center'
          }}
        >
          <video
            src={getVideoSrc(currentIndex)}
            className="w-full h-full object-cover"
            loop
            muted
            autoPlay
          />
        </div>

        {/* textos dentro do vídeo */}
        <div className="absolute left-0 z-50 w-full">
          <div className="mt-35 px-5 sm:px-10">
            <h1 className="text-white font-bold text-5xl">Projeto Foguete</h1>
            <p className="my-5 max-w-md text-white">
              Um projeto realizado a fim de aplicar o aprendizado em robotico
            </p>
            <Button
              id="watch-trailer"
              title="Acesse o github do projeto"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
              onClickButton={()=>window.location.href="#"}
            />
          </div>
        </div>
      </div>


        <h1 className="mix-blend-exclusion bg-blend-difference absolute bottom-5 right-5 uppercase font-black sm:right-10 sm:text-2xl md:text-3xl lg:text-5xl z-[60] pointer-events-none">
          Incubadora Maricá
        </h1>
    </div>
  );
}

export default Hero;