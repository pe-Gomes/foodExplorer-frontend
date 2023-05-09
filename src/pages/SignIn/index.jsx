import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Link, useNavigate } from 'react-router-dom';


import { Container, Form, Brand } from './styles';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();
  const navigate = useNavigate();

  function handleSignIn() {
    signIn({ email, password });
    navigate("/");
  }


  return (
    <Container>
      <Brand>
        <Logo />
        <h1>food explorer</h1>
      </Brand>
      <Form>
      <h1>Faça login</h1>
      
      <p>Email</p>
      <Input type="email"
         placeholder="Exemplo: exemplo@exemplo.com"
         onChange = { e => setEmail(e.target.value)}
         autoComplete="email"
      />
      
      <p>Senha</p>
      <Input 
        type="password"
        placeholder="No mínimo 6 (seis) caracteres"
        onChange = { e => setPassword(e.target.value)}
        autoComplete="current-password"
      />
      <Button title="Entrar" onClick={handleSignIn} />

      <div>
        <Link to="/register">Criar uma conta</Link>
      </div>
      </Form>
    </Container>
  )
}