import { Container } from './styles.js'

import { TagButton } from "../../components/TagButton"
import { Header } from '../../components/Header'

export function Test() {
  return (
    <Container>
      <Header />
      <main>
        <TagButton />
        <TagButton isNew placeholder="Adicionar"/>
      </main>
    </Container>
  )
}