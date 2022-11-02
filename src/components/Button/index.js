
import { ButtonContainer } from './styles';

const Button = ({label, onClick, width='82', height='82'}) => {
    return (
      <ButtonContainer width={width} height={height} onClick={onClick} type="button">
       {label}
      </ButtonContainer>
    );
  }
  
  export default Button;