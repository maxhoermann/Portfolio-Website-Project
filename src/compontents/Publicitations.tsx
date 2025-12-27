import { PUBLICATIONS } from "../constants";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';

function Publicitations(){
    return (
        <>
            <div className="border-b border-neutral-900 pb-4">
                <motion.h1 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 0.5}}    
                    className="my-20 text-center text-4xl">Publications</motion.h1>
                <div>
                    {PUBLICATIONS.map((publication, index) => (
                        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: -100}}
                                transition={{duration: 1}}
                                className="w-full lg:w-1/4">
                                <p className="mb-2 text-sm text-neutral-400">{publication.year}</p>
                            </motion.div>
                            <motion.div 
                                whileInView={{opacity: 1, x: 0}}
                                initial={{opacity: 0, x: 100}}
                                transition={{duration: 1}}                            
                                className="w-full max-w-xl lg:w-3/4">
                                <h6 className="mb-2 font-semibold">
                                    <span className="text-sm text-purple-100">
                                        <a 
                                            href={publication.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="hover:text-purple-300 transition-colors"
                                        >
                                            {publication.title} <ArrowUpRightIcon className="inline w-4 h-4" />
                                        </a>
                                    </span>
                                </h6>
                                <p className="mb-4 text-neutral-400">{publication.authors}<br/>
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
export default Publicitations;