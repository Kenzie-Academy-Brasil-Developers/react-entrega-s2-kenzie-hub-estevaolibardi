import { Container, StyledInput, StyledError } from './styles';

const Input = ({
  placeholder,
  label,
  type,
  register,
  name,
  error,
  autoComplete,
}) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
      <StyledError>{!!error && <span>{error}</span>}</StyledError>
    </Container>
  );
};

export default Input;
