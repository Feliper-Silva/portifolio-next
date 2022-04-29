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
        </div>
      </nav>
    </>
  );
};
