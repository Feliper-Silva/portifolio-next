import Link from "next/link";

export const Navbar = () => {
  const toggleMenu = event => {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAttribute("aria-expanded", active);
  };

  return (
    <div className="navbar">
      <Link href="/">
        <a className="logo">Portfólio</a>
      </Link>
      <nav id="nav">
        <span
          aria-label="Abrir Menu"
          id="btn-mobile"
          aria-haspopup="true"
          aria-controls="menu"
          aria-expanded="false"
          onClick={toggleMenu}
        ></span>
        <ul className="menu" role="menu">
          <li>
            <Link href="/">
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <a>Projetos</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
