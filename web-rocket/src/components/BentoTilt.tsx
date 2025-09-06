import type { ReactNode } from "react"
import { useRef, useState } from "react";

type BentoTiltProps = {
    children: ReactNode,
    className?: string,
}

function BentoTilt({ children, className }: BentoTiltProps) {

    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef<HTMLDivElement|null>(null);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!itemRef.current) return

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`

        setTransformStyle(newTransform)
    }

    function handleMouseLeave() {
        setTransformStyle("");
    }

    return (
        <div
            className={className}
            ref={itemRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    )
}

export default BentoTilt