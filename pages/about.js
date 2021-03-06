import Head from "next/head";
import { Navbar } from "../src/components/navbar";
import myPerfil from "../src/assets/images/foto-perfil.png";
import Image from "next/image";
import { Footer } from "../src/components/footer.js";
const Sobre = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Sobre </title>
        <meta name="description" content="Página sobre Felipe Silva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  Olá Meu nome é Felipe Silva, tenho 23 moro em brasília - DF e
                  estou cursando análise e desenvolvimento de sistemas
                </p>
                <p>
                  Apaixonado por tecnologia desde a época do Orkut e entusiasta
                  com as tecnologias web, passo meu tempo estudando e codando
                  projetos. Como uma pessoa curiosa tento sempre saber algo novo
                  até entender como funciona o máximo possível. Estou disponível
                  para novos desafios, vamos nos conhecer mais?
                </p>
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
