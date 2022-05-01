import { Navbar } from "../src/components/navbar";
import myPerfil from "../src/assets/images/foto-perfil.png";
import Image from "next/image";
import { Footer } from "../src/components/footer.js";
const Sobre = () => {
  return (
    <>
      <Navbar />
      <section className="about" id="about">
        <div className="max-width">
          <h2 className="title">Sobre mim</h2>
          <div className="about-content">
            <div className="column left">
              <Image src={myPerfil} alt="Foto de Felipe Silva" />
            </div>
            <div className="column right">
              <div className="text">
                <p>
                  Olá Meu nome é Felipe Silva, tenho 23 moro em brasília - DF
                  estou cursando análise e desenvolvimento de sistemas
                </p>
                <p>
                  Apaixonado por tecnologia desda época do Orkut e entusiasta
                  com as tecnologias web, passo meu tempo estudando e codando
                  projetos. Estou disponível para novos desafios, vamos nos
                  conhecer mais?
                </p>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Sobre;
