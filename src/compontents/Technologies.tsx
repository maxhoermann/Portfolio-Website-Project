import {motion, Variants} from "framer-motion"

function iconVariants(duration: number){
    return {
        initial: {y: -10},
        animate: {
            y: [10, -10],
            transition: {
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse"
            }
        }
    }
}

function Technologies(){
    return (
        <>
            <div className="border-b border-neutral-200 dark:border-neutral-800 pb-24">
                <motion.h1 
                    whileInView={{opacity: 1, y: 0}}
                    initial={{opacity: 0, y: -100}}
                    transition={{duration: 1.5}}
                    className="my-20 text-center text-4xl">Languages & Technologies</motion.h1>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: -100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap items-center justify-center gap-4">
                    <motion.div 
                        variants={iconVariants(2.5) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">Java</p>
                    </motion.div>
                    <motion.div 
                        variants={iconVariants(5) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">TypeScript</p>
                    </motion.div>
                    <motion.div 
                        variants={iconVariants(2) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">Python</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(3.5) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">SQL</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(6) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">Powershell</p>
                    </motion.div>
                    <motion.div
                        variants={iconVariants(2) as Variants}
                        initial="initial"
                        animate="animate"
                        className="rounded-2xl border-4 border-neutral-300 dark:border-neutral-800 p-4">
                        <p   
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl 
                            tracking-tight text-transparent">Linux</p>
                    </motion.div>
                </motion.div>
                <motion.div 
                    whileInView={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 100}}
                    transition={{duration: 1.5}}
                    className="flex flex-wrap items-center mt-8 justify-center gap-4">
                    <img src="https://tryhackme-badges.s3.amazonaws.com/maxhoer.png" alt="maxhoer tryhackme batch" />
                </motion.div>
            </div>
        </>
    );
}

export default Technologies;