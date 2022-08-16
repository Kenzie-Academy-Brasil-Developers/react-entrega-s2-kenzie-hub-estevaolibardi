import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: 280px;
  height: 416.37px;
  position: absolute;
  background: #212529;
  box-shadow: inset -24px -24px 48px #15181b, inset 24px 24px 48px #2d3237;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  > div {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: var(--Grey-2);
    button {
      background-color: var(--Grey-2);
    }
  }

  form {
    height: 350px;
    width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    label {
      width: 87%;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 375px) {
    width: 310px;
  }

  @media (min-width: 425px) {
    width: 330px;
  }

  @media (min-width: 600px) {
    width: 500px;
  }

  @media (min-width: 800px) {
    width: 32%;
    height: 100%;

    div {
      height: 50px;
      align-items: center;
      div {
        display: flex;
        align-items: center;
      }
    }

    form {
      width: 210px;
      justify-content: space-evenly;
      div {
        width: 100%;
        display: flex;
        height: 80px;
        div {
          width: 85%;
          height: 40px;
          display: none;
          justify-content: space-between;
          align-items: center;

          button {
            background-color: var(--Grey-2);
          }
        }
      }
    }

    h4 {
      margin-right: 15px;
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

export const Header = styled.div`
  width: 100%;
  display: flex;
  background-color: var(--Grey-2);
  justify-content: space-evenly;
  height: 50px;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    width: 240px;
    justify-content: space-between;
  }

  @media (min-width: 375px) {
    width: 310px;
  }

  @media (min-width: 425px) {
    width: 330px;
  }

  @media (min-width: 600px) {
    width: 500px;

    div {
      width: 450px;
    }
  }

  @media (min-width: 800px) {
    width: 100%;

    div {
      width: 180px;
    }
  }
`;
