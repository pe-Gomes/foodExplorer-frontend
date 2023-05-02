import { Container, Brand, Search, ActionButtons } from "./styled";
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { ReactComponent as ExitIcon } from '../../assets/Exit.svg';
import { ReactComponent as ReceiptIcon } from '../../assets/Receipt.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from "../IconButton";

export function Header() {
  return (
    <Container>
       <Brand>
        <Logo />
        <h1>food explorer</h1>
      </Brand>
      <Search>
        <Input
          icon={SearchIcon}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Search>
      
      <ActionButtons>
        <Button title="Pedidos (0)" icon={ReceiptIcon} />
        <IconButton icon={ExitIcon} className="exitIcon" />
      </ActionButtons>
    </Container>
  )
};