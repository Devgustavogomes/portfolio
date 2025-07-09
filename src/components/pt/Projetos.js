import Image from "next/image";

const projetos = [
  {
    nome: "DevTrack",
    imagem: "/projetos/devtrack.png",
    link: "https://github.com/Devgustavogomes/DevTrack",
  },
  {
    nome: "OpenWeather App",
    imagem: "/projetos/openweather.png",
    link: "https://github.com/Devgustavogomes/Projeto-API-de-clima",
  },
];

export default function Projetos() {
  return (
    <section id="projetos" className="w-full p-10 bg-gradient-to-r from-black to-gray-800">
  <div className="max-w-3xl mx-auto">
    <h1 className="mb-8 text-3xl text-azulGustavo">
      projetos<span className="text-white">( )</span>
    </h1>
    <div className="flex gap-6 pb-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700">
      {projetos.map((projeto, idx) => (
        <a
          key={idx}
          href={projeto.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative min-w-[280px] max-w-xs rounded-lg overflow-hidden border-2 border-transparent hover:border-azulGustavo transition-all duration-200 bg-gray-900 shadow-lg"
        >
          <Image
            src={projeto.imagem}
            alt={projeto.nome}
            width={320}
            height={200}
            className="object-cover w-full h-48 transition-transform duration-200 group-hover:scale-105"
          />
        
          <div className="absolute inset-0 flex items-center justify-center transition opacity-0 group-hover:opacity-100 bg-black/40">
            <svg width="40" height="40" fill="none" stroke="#fff" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/80 to-transparent">
            <span className="font-semibold text-white">{projeto.nome}</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
  );
}