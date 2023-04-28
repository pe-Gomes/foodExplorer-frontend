import { Container, Form, Brand } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  return (
    <Container>
      <Brand>
        <Logo />
        <h1>food explorer</h1>
      </Brand>
      <Form>
      <h1>Crie sua conta</h1>
      
      <p>Seu nome</p>
      <Input
        type="text"
        placeholder="Exemplo: Maria"
      />
      
      <p>Email</p>
      <Input type="email"
         placeholder="Exemplo: exemplo@exemplo.com"
      />
      
      <p>Senha</p>
      <Input 
        type="password"
        placeholder="No mínimo 6 (seis) caracteres"
      />
      <Button title="Criar Conta" />

      <div>
        <a href="#">Já tenho uma conta</a>
      </div>
      </Form>
    </Container>
  )
}