// app/components/ProfileCard.jsx
import Image from 'next/image';

const ProfileCard = () => {
    return (
        // O contêiner principal com position: relative
        <div className="relative flex items-center justify-center w-48 h-48 sm:w-56 sm:h-56">

            {/* Imagem de Perfil */}
            <Image
                src="/perfil.png" // Lembre-se de colocar sua imagem na pasta /public
                alt="Foto de Perfil"
                fill
                priority
                className="object-cover border-4 border-gray-200 rounded-full shadow-lg"
            />

            {/* --- Ícones de Tecnologia --- */}

            {/* Ícone React */}
            <div
                className="
          absolute flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16 
          bg-gray-800 rounded-full border-2 border-gray-600 shadow-md 
          animation-float /* Usando nossa classe customizada do globals.css */
          bottom-[-10px] left-[-20px]
        "
            >
                <Image src="/icons/react-logo.svg" alt="React" width={32} height={32} />
            </div>

            {/* Ícone JavaScript */}
            <div
                className="
          absolute flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16
          bg-gray-800 rounded-full border-2 border-gray-600 shadow-md
          animation-float [animation-delay:0.5s] /* Atraso na animação */
          top-[-15px] right-[-10px]
        "
            >
                <Image src="/icons/nodejs-icon.svg" alt="JavaScript" width={32} height={32} />
            </div>

            {/* Ícone TypeScript */}
            <div
                className="
          absolute flex items-center justify-center 
          w-14 h-14 sm:w-16 sm:h-16
          bg-gray-800 rounded-full border-2 border-gray-600 shadow-md
          animation-float [animation-delay:1s] /* Atraso na animação */
          bottom-0 right-[-30px]
        "
            >
                <Image src="/icons/typescript-svgrepo-com.svg" alt="TypeScript" width={32} height={32} />
            </div>

        </div>
    );
};

export default ProfileCard;