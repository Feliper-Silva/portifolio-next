import Head from "next/head";
import { Navbar } from "../src/components/navbar.js";
import MeAvatar from "../src/assets/images/undraw_folder_re_j0i0.svg";
import Image from "next/image";
import { Footer } from "../src/components/footer.js";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfólio</title>
        <meta name="description" content="Portfólio Web de Felipe Silva" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <section className="HomeContainer">
          <div className="ContainerUp">
            <div className="infoContainer">
              <p className="Titulo">Olá, Sou Felipe </p>
              <p className="profissional">Desenvolvedor Back-end</p>
              <div className="buttonsContainer">
                <a
                  href="https://linkedin.com/in/feliper-silva"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/feliper-silva"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  GitHub
                </a>
              </div>
            </div>
            <div className="containerImg">
              <Image src={MeAvatar} alt="My Avatar" width={300} height={300} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
export default Home;
