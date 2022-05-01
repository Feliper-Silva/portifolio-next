import Link from "next/link";
import { Navbar } from "../src/components/navbar";
import { Footer } from "../src/components/footer.js";
const projects = () => {
  return (
    <>
      <Navbar />
      <section className="projects">
        <h2>Projetos</h2>
        <div className="cards">
          <div className="box">
            <div className="text-content">
              <h3>Devagram</h3>
              <p>
                API semelhante ao instagram, podendo publicar fotos é seguir
                outros usuários da api. Além de cadastro de usuário, verificação
                e sistema de pesquisa pelo nome ou email do usuário
              </p>
              <Link href="https://github.com/Feliper-Silva/devagram-node-nextjs">
                <a target="_blank">ver mais</a>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="text-content">
              <h3>Letmeask</h3>
              <p>
                Aplicação ideal para criar salas de perguntas onde pode
                adicionar perguntas e responder a pergunta realizada + marcação
                de resposta respondida
              </p>
              <Link href="https://github.com/Feliper-Silva/letmeask">
                <a target="_blank">ver mais</a>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="text-content">
              <h3>Clone Evernote </h3>
              <p>
                Com sistema de criação de notas cada usuário cria suas notas,
                podendo pesquisar as notas e atualizar em tempo real.
              </p>
              <Link href="https://github.com/Feliper-Silva/client_evernote_clone">
                <a target="_blank">ver mais</a>
              </Link>
            </div>
          </div>
          <div className="box">
            <div className="text-content">
              <h3> Aluracord</h3>
              <p>
                Aplicação com modelo do discord, sistema de chat em tempo real
                com os amigos é criação de sala pessoal!
              </p>
              <Link href="https://github.com/Feliper-Silva/aluracord">
                <a target="_blank">ver mais</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer id="footer" />
    </>
  );
};

export default projects;
