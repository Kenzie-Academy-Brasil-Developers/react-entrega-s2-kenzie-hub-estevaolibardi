import { Container, StyledSelect } from "./styles";

const Select = ({
  placeholder,
  label,
  type,
  register,
  name,
  autoComplete,
  option1,
  option2,
  option3,
  option4,
}) => {
  return (
    <Container>
      <label>{label}</label>
      <StyledSelect
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        {...register(name)}
      >
        <option>{option1}</option>
        <option>{option2}</option>
        <option>{option3}</option>
        <option>{option4}</option>
      </StyledSelect>
    </Container>
  );
};

export default Select;
