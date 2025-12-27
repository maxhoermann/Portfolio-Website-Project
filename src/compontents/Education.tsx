import { EDUCATION } from "../constants";
import {motion} from "framer-motion";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

function Education(){
    return (
        <>
            <div className="border-b border-neutral-200 dark:border-neutral-900 pb-4">
                <motion.h1 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 0.5}}    
                    className="my-20 text-center text-4xl">Education</motion.h1>
                <div>
                    {EDUCATION.map((education, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: -100}}
                                transition={{duration: 1}}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-800 dark:text-neutral-400">{education.years}</p>
                            </motion.div>
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: 100}}
                                transition={{duration: 1}}                            
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">
                                    {education.degree !== "Abitur" ? (
                                        <>{education.subject}, </>
                                    ) : null} <span 
                                    className="text-sm text-neutral-900 dark:text-purple-100">{education.degree}</span>
                                </h6>
                                <p className="mb-4 text-neutral-800 dark:text-neutral-400">{education.university}<br/>
                                    {education.grade !== "" ? <>Grade: {education.grade} <br/></> : null}
                                    <a className="mb-4 text-neutral-800 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-purple-300" 
                                        href="https://www.deutschlandstipendium.de/deutschlandstipendium/de/services/english/the-deutschlandstipendium-best-of-both-worlds-for-students.html"
                                        target="_blank">{education.additionalInformation}
                                        {education.additionalInformation !== "" ? <ArrowUpRightIcon className="inline w-4 h-4" /> : null}
                                         </a> 
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Education;