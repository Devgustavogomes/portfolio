import ProfileCard from "../shared/ProfileCard"
export default function Perfil(){
    return(
        <section className="w-full p-10 bg-gradient-to-r from-black to-gray-800">
            <div className="flex flex-col items-center gap-20 md:flex-row-reverse md:justify-center md:gap-40 ">
                <ProfileCard/>
                <div className="text-white">
                    <h3 className="mb-5 text-xl">Olá, eu sou o</h3>
                    <h1 className="text-5xl text-azulGustavo">{'< Gustavo'}</h1>
                    <h1 className="text-5xl text-azulGustavo">{'Gomes />'}</h1>
                    <h3 className="mt-5 text-2xl">Desenvolvedor Fullstack</h3>
                </div>
            </div>
        </section>
    )
}