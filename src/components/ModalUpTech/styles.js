import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 250px;
  height: 200px;
  position: absolute;
  top: 25%;
  border-radius: 10px;
  background: #212529;
  box-shadow: inset -24px -24px 48px #15181b, inset 24px 24px 48px #2d3237;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: var(--Grey-2);
    border-radius: 10px 10px 0px 0px;
    button {
      background-color: var(--Grey-2);
    }
  }

  form {
    height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    label {
      width: 87%;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 800px) {
    width: 30%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 0;

    div {
      border-radius: 0;
      div {
        border-radius: 0;
      }
    }
  }
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--grey-3);
  color: var(--grey-0);
  border: 0;
  border-radius: 5px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: var(--grey-2);
  }
`;

export const ContButton = styled.div`
  display: flex;
`;
