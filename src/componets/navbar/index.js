import {
  Container,
  Title,
  NavLinksContainer,
  NavLinks
} from "../../../styles/Navbar";

export const Navbar = () => {
  return (
    <>
      <Container>
        <Title>Portifólio</Title>
        <NavLinksContainer>
          <NavLinks href="/">Inicio</NavLinks>
          <NavLinks href="/about">Sobre</NavLinks>
          <NavLinks>Home</NavLinks>
        </NavLinksContainer>
      </Container>
    </>
  );
};
