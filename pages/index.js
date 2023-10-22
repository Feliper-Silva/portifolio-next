import Head from "next/head";
import { Navbar } from "../src/components/navbar.js";
import MeAvatar from "../src/assets/images/undraw_folder_re_j0i0.svg";
import Handle_wave from "../src/assets/emojis/wave.png";
import Image from "next/image";
import { Footer } from "../src/components/footer.js";

const Home = () => {
  return (
    <div>
      <header className="intro">
        <h1 className="intro_hello">Hello! <Image className="emoji wave-hand animated" src={Handle_wave} /></h1>
        <h2>Meu nome é Felipe Silva, sou desenvolvedor web! 👨🏽‍💻</h2>
        <div className="code-editor">
          <div className="header">
            <span className="title"></span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="icon"><g strokeWidth="0" id="SVGRepo_bgCarrier"></g><g strokeLinejoin="round" strokeLinecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M6 6L18 18"></path> <path strokeLinecap="round" strokeWidth="2" stroke="#4C4F5A" d="M18 6L6 18"></path> </g></svg>
          </div>
          <div className="editor-content">
            <code className="code">
              <p><span className="color-0">socialMedia</span> <span className="chave"></span></p>

              <p className="property">
                <span className="color-2">GitHub</span><span>:</span>
                <span className="color-1"><a href="https://github.com/Feliper-Silva" rel="noopener noreferrer" target="_blank" >github.com/Feliper-Silva</a></span>,
              </p>
              <p className="property">
                <span className="color-2">Linkedin</span><span>:</span>
                <span className="color-1"><a href="https://www.linkedin.com/in/feliper-silva/" rel="noopener noreferrer" target="_blank" >linkedin.com/in/feliper-silva</a></span>,
              </p>
              <p className="property">
                <span className="color-2">Email</span><span>:</span>
                <span className="color-1"><a href="mailto:felipe726silva@gmail.com" rel="noopener noreferrer" target="_blank">felipe726silva@gmail.com</a></span>,
              </p>
              <p className="property">
                <span className="color-2">Celular</span><span>:</span>
                <span className="color-1">(61)9 9589-1907</span>
              </p>
              <span className="fechaChave"></span>
            </code>
          </div>
        </div>
      </header>
      <section className="section">
        <div className="section_title">
          Sobre
        </div>
        <div className="section_content">
          <p>Desenvolvendo softwares há pelo menos dois anos, possuo conhecimentos tanto front-end e back-end e costumo aprender sob demanda as necessidades do projeto.</p>
          <p>Atualmente na aréa de Full Stack com a linguagem Caché Object Script no back end e JavaScript no front-end, conheço outras linguagens e frameworks que atende as necessidades do mercado atual nos projetos pessoais.</p>
        </div>
      </section>
      <section className="section skillz">
        <div className="section_title">
          Habilidades
        </div>
        <div className="section_content">
          <div className="skills">
            <div className="skills_category">
              <div className="skills_category_title">Linguagens</div>
              <ul>
                <li className="skills_category_item">JavaScript(ES6)</li>
                <li className="skills_category_item">Java</li>
                <li className="skills_category_item">C#</li>
                <li className="skills_category_item">Caché Object Script</li>
                <li className="skills_category_item">SQL/NoSQL</li>
              </ul>
            </div>
            <div className="skills_category">
              <div className="skills_category_title">Frameworks</div>
              <ul>
                <li className="skills_category_item">Node</li>
                <li className="skills_category_item">Spring boot</li>
                <li className="skills_category_item">React</li>
              </ul>
            </div>
            <div className="skills_category">
              <div className="skills_category_title">Tools</div>
              <ul>
                <li className="skills_category_item">Git & GitLab/GitHub</li>
                <li className="skills_category_item">Linux</li>
                <li className="skills_category_item">Docker</li>
                <li className="skills_category_item">Postman</li>
              </ul>
            </div>
            <div className="skills_category">
              <div className="skills_category_title">Database</div>
              <ul>
                <li className="skills_category_item">PostgreSQL</li>
                <li className="skills_category_item">MongoDB</li>
                <li className="skills_category_item">Caché Intersystem</li>
                <li className="skills_category_item">MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section experience">
        <div className="section_title">
          Experiências
        </div>
        <div className="section_content">
          <div className="jobs">
            <div className="job">
              <div className="time-place">
                <div className="job_company">
                  <a href="https://www.osm.com.br/" target="_blank" rel="noopener noreferrer">Osm Consultoria e Sistema</a>
                </div>
                <div className="job_time">Mai 2022 - Atual</div>
              </div>
              <div className="job_position">
                <div className="job_position_title">Desenvolvedor Full Stack Júnior</div>
                <div className="job_position_activity">
                  <ul>
                    <li>Fornecer suporte e acompanhamento nas dificuldades operacionais do sistema MENTORH, esclarecendo dúvidas com os usuários,</li>
                    <li>Propor soluções técnicas para os problemas encontrados, através de evidências e testes em homologação que comprovem sua efetividade,</li>
                    <li>Analisar solicitações efetuadas pelos clientes, como criação de relatórios, novas telas e funcionalidades,</li>
                  </ul>
                  <div className="job_position_activity_skill">
                    <ul>
                      <li className="job_position_activity_skill_item">HTML</li>
                      <li className="job_position_activity_skill_item">CSS</li>
                      <li className="job_position_activity_skill_item">JavaScript</li>
                      <li className="job_position_activity_skill_item">bootstrap 3.3</li>
                      <li className="job_position_activity_skill_item">Caché Object Script</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="job">
              <div className="time-place">
                <div className="job_company">
                  <a href="https://www.ifb.edu.br/" target="_blank" rel="noopener noreferrer">Intituto Federal de Brasília</a>
                </div>
                <div className="job_time">Jul - Dez 2021</div>
              </div>
              <div className="job_position">
                <div className="job_position_title">Desenvolvedor Front - End</div>
                <div className="job_position_activity">
                  <ul>
                    <li>Inserção de contéudo,</li>
                    <li>Estilização do Normaliza 2º Edição</li>
                  </ul>
                  <div className="job_position_activity_skill">
                    <ul>
                      <li className="job_position_activity_skill_item">HTML</li>
                      <li className="job_position_activity_skill_item">CSS</li>
                      <li className="job_position_activity_skill_item">MARKDOWN</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
      <section className="section">
        <div className="section_title">
          Projetos
        </div>
        <div className="section_content">
        <div className="project">
            <div className="project_name">
              <span>To-do-List Api</span>
              <a href="https://github.com/Feliper-Silva/todo-list-spring-boot" rel="noopener noreferrer" target="_blank" className="arrow-link"></a>
            </div>
            <p>Criação da api de tarefas com java e springboot. Aprendiz com ele a mapear as rotas para usuarios com permissão.</p>
            <div className="project_skill_used">
              <span className="project_skill_used_item">Java</span>
              <span className="project_skill_used_item">Springboot</span>
              <span className="project_skill_used_item">H2 - memory</span>
            </div>
          </div>
          <div className="project">
            <div className="project_name">
              <span>Evernote Clone</span>
              <a href="https://github.com/Feliper-Silva/client_evernote_clone" target="_blank" rel="noopener noreferrer" className="arrow-link"></a>
            </div>
            <p>Aplicação realizada para aprimorar os conhecimento em criação de api(Node ,express, JWT, mongoDB) e consumo de api(ReactJs, Sass). Aprendi bastante com o projeto, como integração de back-end e front-end como micro serviços e validação de usuários.</p>
            <div className="project_skill_used">
              <span className="project_skill_used_item">JavaScript</span>
              <span className="project_skill_used_item">Node</span>
              <span className="project_skill_used_item">React</span>
              <span className="project_skill_used_item">sass</span>
              <span className="project_skill_used_item">Mongodb</span>
            </div>
          </div>
          <div className="project">
            <div className="project_name">
              <span>Sala Discord</span>
              <a href="https://github.com/Feliper-Silva/aluracord" rel="noopener noreferrer" target="_blank" className="arrow-link" ></a>
            </div>
            <p>Aplicação realizada para aprimorar os conhecimento em Next e React, sala de discord com consumo de api de figurinhas da alura.</p>
            <div className="project_skill_used">
              <span className="project_skill_used_item">JavaScript</span>
              <span className="project_skill_used_item">Next</span>
              <span className="project_skill_used_item">React</span>
              <span className="project_skill_used_item">Supabase</span>
            </div>
          </div>
          <div className="project">
            <div className="project_name">
              <span>letmeask</span>
              <a href="https://github.com/Feliper-Silva/letmeask" rel="noopener noreferrer" target="_blank" className="arrow-link"></a>
            </div>
            <p>permite criar salas de perguntas e respostas em tempo real com permissão somente de usuários com o codigo da sala. Projeto muito legal de realizar e aprimorar os conhecimento em React.</p>
            <div className="project_skill_used">
              <span className="project_skill_used_item">JavaScript</span>
              <span className="project_skill_used_item">TypeScript</span>
              <span className="project_skill_used_item">Firebase</span>
              <span className="project_skill_used_item">React</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Home;
