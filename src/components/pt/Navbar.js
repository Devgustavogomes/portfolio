'use client'
import { useState } from "react"
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="w-full px-5 py-4 bg-gradient-to-r from-black to-gray-800">
            <div className="flex items-center justify-between mx-auto max-w-7xl md:justify-normal">
                {/* Logo */}
                <div className="flex items-center justify-between flex-1 md:justify-start">
                    <p>
                        <span className="text-2xl font-bold text-gray-600">GUS</span>
                        <span className="text-2xl font-bold text-gray-500">T</span>
                        <span className="text-2xl font-bold text-white">AVO</span>
                    </p>
                    {/* Hamburger */}
                    <button
                        className="block text-white md:hidden focus:outline-none"
                        onClick={() => setOpen(!open)}
                        aria-label="Abrir menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {/* Navegação central */}
                <ul className="justify-center flex-1 hidden gap-6 font-medium text-white md:flex">
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#projetos" className="text-azulGustavo">Projetos</a></li>
                </ul>
                {/* Contatos à direita */}
                <div className="justify-end flex-1 hidden gap-4 text-white md:flex">
                    <a href="https://www.linkedin.com/in/devgustavogomes/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center gap-2">
                        <FaLinkedin className="text-white" />
                        Linkedin
                    </a>
                    <a href="https://github.com/Devgustavogomes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <FaGithub className="text-white" />
                        Github
                    </a>
                    <a href="mailto:devgustavogomes31@gmail.com" onClick={() => setOpen(false)} className="flex items-center gap-2">
                        <MdEmail className="text-white" />
                        Contato
                    </a>
                    {/* Adicione outros ícones/links de contato aqui */}
                </div>
            </div>
            {/* Menu mobile */}
            {open && (
                <ul className="flex flex-col gap-4 mt-4 font-medium text-white md:hidden">
                    <li><a href="#sobre" onClick={() => setOpen(false)}>Sobre</a></li>
                    <li><a href="#habilidades" onClick={() => setOpen(false)}>Habilidades</a></li>
                    <li><a href="#projetos" className="text-azulGustavo" onClick={() => setOpen(false)}>Projetos</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/devgustavogomes/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="flex items-center gap-2">
                            <FaLinkedin className="text-white" />
                            Linkedin
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Devgustavogomes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                            <FaGithub className="text-white" />
                            Github
                        </a>
                    </li>
                    <li>
                        <a href="mailto:devgustavogomes31@gmail.com" onClick={() => setOpen(false)} className="flex items-center gap-2">
                            <MdEmail className="text-white" />
                            Contato
                        </a>
                    </li>
                </ul>
            )}
        </nav>
    )
}