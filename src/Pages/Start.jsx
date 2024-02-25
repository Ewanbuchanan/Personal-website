import React from "react";
import {motion} from "framer-motion";
import {Helmet} from "react-helmet-async";




function Start() {
    const height = window.innerHeight
        return <body id="Meet Me">
        <Helmet>
            <title>Ewan Buchanan</title>
            <meta name="description" content="Software Engineer" />
            <link rel="canonical" href="/src/Pages/Start.jsx" />
        </Helmet>
            <motion.body
                initial = {{backgroundColor: "black"}}
                animate={{}}

                className="flex h-screen w-screen justify-center content-center items-center">

                <svg className="absolute inset-0 w-screen h-screen overflow-visible  z-0">
                    <h1 className="text-transparent">Ewan Buchanan Website</h1>

                    {Array.from({length: (height / 75)}, (_, i) => (
                        <motion.g
                            key={i}
                        >
                            {Array.from({length: height}, (_, j) => (
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
                <div className="absolute
                 h-screen top-[50%] left-[47%] max-w-25 max-h-3.5">
                    <div className="">

                <a href={"/App"}>
                    <motion.button
                        whileHover={{scale: 1.1 }}
                        className="text-amber-100 font-bold font-serif
                     border border-amber-100 hover:bg-gradient-to-bl
                      from-green-500 to-cyan-950 text-2xl rounded-md">Meet me</motion.button>
                </a>
                        </div>
                </div>
            </motion.body>
        </body>
}

export default Start;