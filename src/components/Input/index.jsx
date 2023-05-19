import { Container } from './styles'

export function Input({ icon: Icon, ...rest }) {
  return (
    <Container>
      <input {...rest} />
      {Icon && <Icon {...rest} />}
    </Container>
  )
}
