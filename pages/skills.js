import { Navbar } from "../src/components/navbar";
import Head from "next/head";
import Image from "next/image";
import logoHTML5 from "../src/assets/images/html-5.png";
import logoCSS from "../src/assets/images/css.png";
import logoJavaScript from "../src/assets/images/javascript.png";
import logoNodeJs from "../src/assets/images/nodejs.png";
import logoGitHub from "../src/assets/images/github.png";
import logoTypeScript from "../src/assets/images/typescript.png";
import logoReact from "../src/assets/images/react.png";
import logoMongoDb from "../src/assets/images/mongodb.png";
import logoFlexibilidade from "../src/assets/images/adaptabilidade.svg";
import logoColaboracao from "../src/assets/images/colaboration.svg";
import logoComunicacao from "../src/assets/images/communication.svg";
import logoResiliencia from "../src/assets/images/resiliencia.svg";
import logoAutodidatismo from "../src/assets/images/study.svg";
import { Footer } from "../src/components/footer.js";
const skills = () => {
  return (
    <>
      <Head>
        <title>Portfólio - Skills </title>
        <meta name="description" content="Página skills Felipe Silva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <section className="section">
          <h2 className="title">Hard skills</h2>
          <div className="containerHardSkills">
            <div className="containerSkill">
              <p>HTML5</p>
              <Image
                src={logoHTML5}
                width={210}
                height={210}
                alt="Logo do HTML5"
              />
            </div>
            <div className="containerSkill">
              <p>CSS3</p>
              <Image
                src={logoCSS}
                width={150}
                height={150}
                alt="Logo do CSS3"
              />
            </div>
            <div className="containerSkill">
              <p>JavaScript</p>
              <Image
                src={logoJavaScript}
                width={150}
                height={150}
                alt="Logo do JavaScript"
              />
            </div>
            <div className="containerSkill">
              <p>NodeJs</p>
              <Image
                src={logoNodeJs}
                width={150}
                height={150}
                alt="Logo do NodeJs"
              />
            </div>
            <div className="containerSkill">
              <p>ReactJs</p>
              <Image
                src={logoReact}
                width={150}
                height={150}
                alt="Logo do React"
              />
            </div>
            <div className="containerSkill">
              <p>GitHub</p>
              <Image
                src={logoGitHub}
                width={150}
                height={150}
                alt="Logo do Github"
              />
            </div>
            <div className="containerSkill">
              <p>Typescript</p>
              <Image
                src={logoTypeScript}
                width={150}
                height={150}
                alt="Logo do TypeScript"
              />
            </div>
            <div className="containerSkill">
              <p>MongoDB</p>
              <Image
                src={logoMongoDb}
                width={150}
                height={150}
                alt="Logo do MongoDB"
              />
            </div>
          </div>
          <div>
            <h2 className="title">Soft skills</h2>
            <div className="containerSoftSkills">
              <div className="containerSkill">
                <p>Resiliência</p>
                <Image
                  src={logoResiliencia}
                  width={210}
                  height={210}
                  alt="imagem de uma pessoa focada no computador"
                />
              </div>
              <div className="containerSkill">
                <p> Flexibilidade</p>
                <Image
                  src={logoFlexibilidade}
                  width={210}
                  height={210}
                  alt="imagem com um boneco estando parado na frente de vários caminhos que pode seguir"
                />
              </div>
              <div className="containerSkill">
                <p>Autodidatismo</p>
                <Image
                  src={logoAutodidatismo}
                  width={210}
                  height={210}
                  alt="imagem que representa uma pessoa estudando sozinho"
                />
              </div>
              <div className="containerSkill">
                <p>Colaboração</p>
                <Image
                  src={logoColaboracao}
                  width={210}
                  height={210}
                  alt="Imagem que representa um grupo de pessoas trabalhando juntos."
                />
              </div>
              <div className="containerSkill">
                <p>Comunicação</p>
                <Image
                  src={logoComunicacao}
                  width={210}
                  height={210}
                  alt="imagem que representa 3 pessoas conversando e dividindo ideias juntos"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default skills;
