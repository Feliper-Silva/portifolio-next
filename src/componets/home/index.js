import {
  HomeContainer,
  ContainerUp,
  Text,
  Cargo,
  Buttons,
  ButtonContainer,
  ContainerImg,
  InfoContainer
} from '../../../styles/Home';
import Image from 'next/image';
import MeAvatar from '../../assets/images/undraw_launching_re_tomg.svg';
export const HomePrimary = () => {
  return (
    <>
      <HomeContainer>
        <ContainerUp>
          <InfoContainer>
            <Text> Olá, Sou Felipe </Text>
            <Cargo>Desenvolvedor Full Stack</Cargo>
            <ButtonContainer>
              <Buttons>Download CV</Buttons>
              <Buttons>Contatos</Buttons>
            </ButtonContainer>
          </InfoContainer>
          <ContainerImg>
            <Image src={MeAvatar} alt="My Avatar" width={300} height={300} />
          </ContainerImg>
        </ContainerUp>
      </HomeContainer>
    </>
  );
};
