import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo">
          <Link href="/">
            <a>Portfólio</a>
          </Link>
        </div>
        <div className="containerLinks">
          <Link href="/">
            <a className="navLinks"> Inicio</a>
          </Link>
          <Link href="/about">
            <a className="navLinks"> Sobre</a>
          </Link>
          <Link href="/skills">
            <a className="navLinks"> Skills</a>
          </Link>
          <Link href="/projects">
            <a className="navLinks">Projetos</a>
          </Link>
        </div>
      </nav>
    </>
  );
};
