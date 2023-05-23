import { Container } from './styles'

export function Button({ icon: Icon, title, children, ...rest }) {
  return (
    <Container type="button" {...rest}>
      {Icon && <Icon {...rest} />}
      {title}
      {children}
    </Container>
  )
}
