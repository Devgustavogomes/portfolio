import Perfil from "@/components/en/Perfil";
import Navbar from "@/components/en/Navbar";
import Sobre from "@/components/en/Sobre";
import Habilidades from "@/components/en/Habilidades";
import Projetos from "@/components/en/Projetos";

export default function Home() {
  return (

    <div className="">
      <Navbar/>
      <Perfil/>
      <Sobre/>
      <Habilidades/>
      <Projetos/>
    </div>
  );
}
