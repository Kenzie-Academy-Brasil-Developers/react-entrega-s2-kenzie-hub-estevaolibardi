import styled from "styled-components";

const StyledButton = styled.button`
  width: 87.8%;
  height: 40px;
  color: var(--Grey-0);
  background-color: ${(props) => (props.register ? "#868E96" : "#FF577F")};
  margin: 0px 5px;
  border: 1.2px solid ${(props) => (props.register ? "#868E96" : "#FF577F")};
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 12.8347px;
  font-weight: 500;

  :hover {
    transition: 0.4s;
    cursor: pointer;
    background-color: ${(props) => (props.register ? "#343B41" : "#FF427F")};
    border: 1.2px solid ${(props) => (props.register ? "#343B41" : "#FF427F")};
  }
`;

export default StyledButton;
