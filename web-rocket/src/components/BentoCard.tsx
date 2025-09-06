import type { ReactNode } from "react"

type bentoCardProps = {
    src: string,
    title: ReactNode,
    description?: string,
    containerClassTitle?:string,
    containerClassDescription?: string,
}

function BentoCard({src, title, description, containerClassTitle, containerClassDescription}:bentoCardProps) {
  return (
        <div className="relative size-full">
            <video 
            src={src}
            loop
            autoPlay
            muted
            className="absolute left-0 top- size-full object-cover"
            />
            <div 
            className="relative z-10 flex size-full flex-col gap-3 p-5 text-blue-50">
                <h1 className={ `uppercase md:text-6xl text-4xl font-black ${containerClassTitle}`}>
                   {title}
                </h1>
                 {description && (
                        <p className={`mt-3 max-w-64 text-xs md:text-base ${containerClassDescription}`}>{description}</p>
                    )}
            </div>

        </div>
    )
}

export default BentoCard