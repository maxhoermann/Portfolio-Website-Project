import { WORK_EXPERIENCE } from "../constants";
import {motion} from "framer-motion"

function Work_Experience(){
    return (
        <>
            <div className="border-b border-neutral-200 dark:border-neutral-900 pb-4">
                <motion.h1 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 0.5}}  
                    className="my-20 text-center text-4xl">Work Experience</motion.h1>
                <div>
                    {WORK_EXPERIENCE.map((experience, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: -100}}
                                transition={{duration: 1}}                            
                                className="w-full lg:w-1/4 lg:pt-1">
                                <p className="mb-2 text-sm text-neutral-800 dark:text-neutral-400">{experience.years}</p>
                            </motion.div>
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: 100}}
                                transition={{duration: 1}}  
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">
                                    {experience.role}, <span className="text-sm text-neutral-900 dark:text-purple-100">
                                        {experience.company === "SCHUTZWERK GmbH" && (<a href="https://www.schutzwerk.com/" target="_blank" className="hover:text-neutral-700 dark:hover:text-purple-300">{experience.company}</a>)}
                                        {experience.company === "Ludo Fact GmbH" && (<a href="https://ludofact.de/en/" target="_blank" className="hover:text-neutral-700 dark:hover:text-purple-300">{experience.company}</a>)}
                                        {experience.company === "440s.de - for fourties" && (<a href="https://440s.de/" target="_blank" className="hover:text-neutral-700 dark:hover:text-purple-300">{experience.company}</a>)}
                                        {experience.company === "Ulm University" && (<a href="https://www.uni-ulm.de/" target="_blank" className="hover:text-neutral-700 dark:hover:text-purple-300">{experience.company}</a>)}
                                    </span>
                                </h6>
                                <p className="mb-4 text-neutral-800 dark:text-neutral-400">{experience.description}</p>
                                {experience.topics.map((topics, index) => (
                                    <span key={index} className="mr-2 mt-4 rounded 
                                    bg-neutral-200 dark:bg-neutral-900 
                                    border border-neutral-300 dark:border-transparent
                                    shadow-md dark:shadow-none
                                    px-2 py-1 text-sm 
                                    font-medium text-neutral-900 dark:text-purple-800">{topics}</span>
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Work_Experience;