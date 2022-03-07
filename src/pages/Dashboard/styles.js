import styled from "styled-components";

export const Container = styled.div`
  height: 750px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ContTech = styled.div`
  width: 92.5%;
  display: flex;
  justify-content: space-between;
  margin: 20px;
  align-items: center;

  @media (min-width: 800px) {
    min-width: 740px;
    max-width: 779.73px;
  }

  span {
    font-size: 16px;
    color: var(--Grey-0);
    font-weight: 600;
  }

  button {
    width: 32.49px;
    height: 32px;
    background-color: var(--Grey-3);
    border-radius: 4px;
    border: none;

    img {
      width: 10.72px;
      height: 10.56px;
    }
  }
`;

export const WelcomeUser = styled.div`
  height: 131px;
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  span {
    color: var(--Grey-0);
    font-size: 18px;
    font-weight: bold;
    width: 92%;
    text-align: start;
    margin-bottom: 10px;
  }

  p {
    width: 92%;
    color: var(--Grey-1);
    font-size: 12px;
    text-align: start;
  }

  @media (min-width: 800px) {
    min-width: 740px;
    max-width: 779.73px;
    margin-top: auto;
    width: 92.5%;

    span {
      width: 100%;
      font-size: 18px;
    }

    p {
      width: 100%;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 92.5%;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (min-width: 800px) {
    min-width: 740px;
    max-width: 779.73px;
    margin-bottom: 20px;
  }
`;

export const StyledForm = styled.div`
  width: 92.5%;
  height: 568.47px;
  padding: 20px;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  h2 {
    font-size: 14.3916px;
  }

  select {
    width: 100%;
    height: 38.5px;
    background-color: var(--Grey-2);
    border: 2px solid var(--Grey-2);
    border-radius: 3px;
    color: var(--Grey-1);
    padding-left: 10px;
  }

  p {
    color: var(--Grey-1);
    font-size: 10px;
    font-weight: 400;
    margin-top: 18px;
    margin-bottom: 20px;
  }

  span {
    color: var(--primary-Negative);
    font-size: 10px;
    font-weight: 400;
    width: 80%;
    text-align: end;
    color: #ff427f;
  }

  button {
    background-color: var(--color-primary-Negative);
    border-color: var(--color-primary-Negative);
    margin-top: 15px;
  }

  label {
    width: 87%;
    margin-bottom: 15px;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  margin-top: 49.46px;
  justify-content: space-evenly;
  width: 100%;
  flex-direction: column;
  align-items: center;

  hr {
    border: 1px solid var(--Grey-3);
    width: 100%;
  }

  img {
    height: 65%;
  }

  button {
    width: 79.54px;
    padding: 8px;
    background-color: var(--Grey-3);
    border-radius: 4px;
    border: none;
  }
`;

export const StyledButton = styled.button`
  width: 32px;
  height: 32px;
  background-color: var(--Grey-3);
  color: var(--Grey-0);
  border: 0;
  border-radius: 5px;
  font-weight: 600;

  :hover {
    cursor: pointer;
    background-color: var(--Grey-2);
  }
`;

export const DivTech = styled.div`
  width: 92.5%;
  height: 416.37px;
  position: relative;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 800px) {
    min-width: 740px;
    max-width: 779.73px;
    height: 400px;
  }
`;

export const ModalDiv = styled.div`
  width: 91%;
  display: flex;
  margin-top: 40px;
  justify-content: center;
`;
