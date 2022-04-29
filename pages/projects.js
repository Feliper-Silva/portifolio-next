import { Navbar } from "../src/components/navbar";
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
                Api semelhante ao instagram, podendo publicar fotos é seguir
                outros usuários da api. Além de cadastro de usuário, verificação
                e sistema de pesquisa pelo nome ou email do usuário
              </p>
              <a>ver mais</a>
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
              <a>ver mais</a>
            </div>
          </div>
          <div className="box">
            <div className="text-content">
              <h3>Clone Evernote </h3>
              <p>
                Com sistema de criação de notas cada usuário cria suas notas,
                podendo pesquisar as notas e atualizar em tempo real.
              </p>
              <a>ver mais</a>
            </div>
          </div>
          <div className="box">
            <div className="text-content">
              <h3> aluracord</h3>
              <p>
                Aplicação com modelo do discord, sistema de chat em tempo real
                com os amigos é criação de sala pessoal!
              </p>
              <a>ver mais</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default projects;
