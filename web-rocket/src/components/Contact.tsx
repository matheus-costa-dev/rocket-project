import { CONTACT_TEXT } from "../constans/texts"
import AnimatedTitle from "./shared/AnimatedTitle"
import Button from "./shared/Button"

function Contact() {
    return (
        <div id="contato"
            className="my-20 min-h-96 w-screen px-10"
        >
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-2xl uppercase">
                        {CONTACT_TEXT.up_text}
                    </p>

                    <AnimatedTitle
                        title= {CONTACT_TEXT.main_text}
                        containerClass="special-font !text-3xl !md:text-2xl w-full font-zentry !font-black !leading-[.9]"
                    />

                    <Button 
                    id="contact-button"
                    title={CONTACT_TEXT.button_text}
                    containerClass="mt-10 cursor-pointer" />
                    
                </div>
            </div>
        </div>
    )
}

export default Contact