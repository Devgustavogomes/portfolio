import Perfil from "@/components/pt/Perfil";
import Navbar from "@/components/pt/Navbar";
import Sobre from "@/components/pt/Sobre";
import Habilidades from "@/components/pt/Habilidades";
import Projetos from "@/components/pt/Projetos";

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
