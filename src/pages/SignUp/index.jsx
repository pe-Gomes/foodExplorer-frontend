import { useState } from 'react'
import { api } from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'

import { Container, Form, Brand } from './styles'
import { ReactComponent as Logo } from '../../assets/logo.svg'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export function SignUp() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  function handleEnterAsSubmit(e) {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  async function handleSubmit() {
    if (!name || !email || !password) {
      alert('Preencha todos os campos para fazer o cadastro.')
    }

    try {
      await api.post('/users', { name, email, password })
      alert('Conta criada com sucesso!')
      navigate('/')
    } catch (error) {
      if (error.response) {
        throw alert(error.response.data.message)
      } else {
        throw alert('Não foi possível cadastrar a conta. Tente novamente.')
      }
    }
  }

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
          tabIndex="0"
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => handleEnterAsSubmit(e)}
        />

        <p>Email</p>
        <Input
          type="email"
          placeholder="Exemplo: exemplo@exemplo.com"
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e) => handleEnterAsSubmit(e)}
        />

        <p>Senha</p>
        <Input
          type="password"
          placeholder="No mínimo 6 (seis) caracteres"
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => handleEnterAsSubmit(e)}
        />
        <Button title="Criar Conta" onClick={handleSubmit} />

        <div>
          <Link to="/">Já tenho uma conta</Link>
        </div>
      </Form>
    </Container>
  )
}
