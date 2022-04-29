import { AboutContainer, TitleAbout, SubtitleAbout } from "../styles/About";
import { Navbar } from "../src/componets/navbar";
const Sobre = () => {
  return (
    <>
      <Navbar />
      <AboutContainer>
        <TitleAbout>Sobre</TitleAbout>
        <SubtitleAbout>
          Formado em Técnico em Desenvolvimento de Sistemas, atuo há 2 anos como
          Desenvolvedor Web. Possuo conhecimento atual em Back-end e estou me
          especializando para ser Desenvolvedor Full Stack
        </SubtitleAbout>
      </AboutContainer>
    </>
  );
};
export default Sobre;
