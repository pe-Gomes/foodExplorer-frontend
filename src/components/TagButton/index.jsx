import { Container } from "./styles";
import { ReactComponent as CloseIcon } from '../../assets/Close.svg';
import { ReactComponent as PlusIcon } from '../../assets/Plus.svg';

export function TagButton({ value, isNew, onClick, ...rest }) {
  return (
    <Container isNew={isNew} {...rest} >
      <input
        type="text"
        value={value}
        {...rest}
      />

      <button
      type='button'
      onClick={onClick}
      >
        {isNew ? <PlusIcon /> : <CloseIcon />}
      </button>
    </Container>
  )
}