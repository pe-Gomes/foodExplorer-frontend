import { Container, Brand } from "./styles";
import { ReactComponent as Logo } from '../../assets/logo.svg';

export function Footer() {
  return (
    <Container>
      <Brand>
        <Logo />
        <h1>food explorer</h1>
      </Brand>
      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  )
}