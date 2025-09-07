import type { MouseEventHandler, ReactNode } from "react"


type buttonProps = {
    id: string,
    title: string,
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    containerClass?: string;
    onClickButton?:MouseEventHandler<HTMLButtonElement>,
}

function Button({ id, title, leftIcon, rightIcon, containerClass, onClickButton }: buttonProps) {
    return (
        <button
            id={id}
            className={`flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-300 px-7 py-3 text-black ${containerClass}`}
            onClick={onClickButton}
            >



            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            <span className="relative inline-flex overflow-hidden text-xs uppercase">
                <div>{title}</div>
            </span>
            {rightIcon && <span className="ml-2">{rightIcon}</span>}

        </button>
    )
}

export default Button