import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 92.5%;
  height: 274.34px;
  border-radius: 3.20867px;
  background: #212529;
  box-shadow: inset -24px -24px 48px #15181b, inset 24px 24px 48px #2d3237;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    width: 100%;
    display: flex;
    background-color: var(--Grey-2);
    justify-content: center;

    div {
      width: 85%;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        background-color: var(--Grey-2);
      }
    }
  }

  label {
    width: 87%;
    margin-bottom: 15px;
  }

  form {
    height: 270px;
    width: 96.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }

  @media (min-width: 800px) {
    width: 30%;
    height: 100%;

    form {
    }

    div {
      div {
        width: 85%;
        height: 40px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
          background-color: var(--Grey-2);
        }
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
