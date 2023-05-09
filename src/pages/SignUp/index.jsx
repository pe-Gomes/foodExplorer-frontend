import { Link } from 'react-router-dom';

import { Container, Form, Brand } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
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
        autoComplete="new-password"
      />
      <Button title="Criar Conta" />

      <div>
        <Link to="/">Já tenho uma conta</Link>
      </div>
      </Form>
    </Container>
  )
}