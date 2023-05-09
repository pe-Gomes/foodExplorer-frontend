import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { Container, Brand, Search, ActionButtons } from "./styled";

import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as SearchIcon } from '../../assets/Search.svg';
import { ReactComponent as ExitIcon } from '../../assets/Exit.svg';
import { Input } from '../Input';
import { Button } from '../Button';
import { IconButton } from "../IconButton";

export function HeaderAdmin() {
  const navigate = useNavigate();
  const { signOut, admin } = useAuth();

  function handleSignOut() {
    signOut();
    navigate("/")
    navigate("/");
  }
  

  function handleNewProduct() {
    navigate("/new")
  }

  return (
    <Container>
       <Brand>
        <Logo />
        <h1>food explorer</h1>
        <span>admin</span>
      </Brand>
      <Search>
        <Input
          icon={SearchIcon}
          type="text"
          placeholder="Busque por pratos ou ingredientes"
        />
      </Search>
      
      <ActionButtons>
        <Button title="Novo prato" onClick={handleNewProduct} />
        <IconButton icon={ExitIcon} className="exitIcon" onClick={handleSignOut} />
      </ActionButtons>
    </Container>
  )
};