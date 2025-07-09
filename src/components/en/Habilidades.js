import Image from "next/image"
export default function Habilidades(){
    return(
        <section id="habilidades" className="w-full p-10 bg-div1">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl text-white">
                    <span className="text-azulGustavo">skills</span>
                    <span>( )</span>
                </h1>
                <div className="flex flex-row flex-wrap gap-5 px-2 py-10">
                    <Image
                        src={'/skills/javascript.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Javascript"
                    />
                    <Image
                        src={'/skills/nodejs.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Node.js"
                    />
                    <Image
                        src={'/skills/express.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Express"
        
                    />
                    <Image
                        src={'/skills/html.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="HTML"
                    />
                    <Image
                        src={'/skills/css.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="CSS"
                    />
                    <Image
                        src={'/skills/react.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="React"
                    />
                    <Image
                        src={'/skills/nextjs.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Next.js"
                    />
                    <Image
                        src={'/skills/mongodb.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="MongoDB"
                    />
                    <Image
                        src={'/skills/tailwindcss.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Tailwind CSS"
                    />
                    <Image
                        src={'/skills/bootstrap.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Bootstrap"
                    />
                    <Image
                        src={'/skills/git.svg'}
                        width={64}
                        height={64}
                        priority
                        alt="Git"
                    />  
                </div>
            </div>
        </section>
    )
}