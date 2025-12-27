import { CONTACT } from "../constants";
import {motion} from "framer-motion"

function Contact(){
    return (
        <>
            <div className="border-b border-neutral-200 dark:border-neutral-900 pb-20">
                <motion.h1 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 0.5}}  
                    className="my-10 text-center text-4xl">Get in Touch</motion.h1>
                <div className="text-center tracking-tighter">
                    <a href={`mailto:${CONTACT.email}`} className="border-b border-neutral-900 dark:border-neutral-100 hover:text-purple-600 dark:hover:text-purple-300">{CONTACT.email}</a>
                </div>
            </div>
        </>
    );
}
export default Contact