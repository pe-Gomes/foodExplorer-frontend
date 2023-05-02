import { Container } from './styles';

export function IconButton({icon: Icon, title, ...rest}) {
  return (
    <Container>
      {Icon && <Icon {...rest} />}
      {title}
    </Container>
  )
};