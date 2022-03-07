import { Container, StyledInput } from "./styles";

const Input = ({ placeholder, label, type, register, name, autoComplete }) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledInput
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      />
    </Container>
  );
};

export default Input;
