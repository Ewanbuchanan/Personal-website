import React from "react";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";
import {Link} from "react-router-dom";




function Start() {
    const height = window.innerHeight
        return <body id="Meet Me">
        <Helmet>
            <title>Ewan Buchanan</title>
            <meta name="description" content="Software Engineer" />
            <link rel="canonical" href="/Start" />
        </Helmet>
        <motion.body
            initial={{backgroundColor: "black"}}
            animate={{}}

            className="flex h-screen w-screen justify-center content-center items-center">

            <svg className="absolute inset-0 w-screen h-screen overflow-visible  z-0">
                <h1 className="hidden">Ewan Buchanan Start Website</h1>

                {Array.from({length: (height / 75) + 1}, (_, i) => (
                    <motion.g
                        key={i}
                    >
                        {Array.from({length: height + 1}, (_, j) => (
                            <motion.rect
                                key={j}
                                width={75}
                                height={75}
                                rx="0"
                                stroke="#0a0f1e"
                                x={(j + 1) * 80 - 80} // Adjust spacing as needed
                                y={(i + 1) * 80 - 80} // Adjust spacing as needed
                                whileHover={{stroke: "#FFF", scale: 1.1, rx: 5}}
                            />
                        ))}
                    </motion.g>
                ))}
            </svg>
            <div className="relative flex items-center w-screen h-screen max-h-3.5 max-w-32">
                        <Link to="/App">
                            <motion.button
                                whileHover={{scale: 1.1}}
                                className="absolute max-h-10
                  items-center text-amber-100 top-[50%]
                     mt-[-50px]
                   left-[50%] ml-[-54px]  font-bold font-serif
                     border border-amber-100 bg-black hover:bg-gradient-to-bl
                      from-green-500 to-cyan-950 justify-center align-middle text-2xl rounded-md">Meet me
                            </motion.button>
                        </Link>
                </div>
        </motion.body>
        </body>
}

export default Start;