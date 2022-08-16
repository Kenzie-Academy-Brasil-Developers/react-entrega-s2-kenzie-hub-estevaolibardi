import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContTech = styled.div`
  width: 280px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;

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
    min-width: 740px;
    max-width: 779.73px;
  }

  span {
    font-size: 1.2rem;
    color: var(--Grey-0);
    font-weight: 600;
  }

  button {
    width: 32px;
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
  width: 280px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h2 {
    color: var(--Grey-0);
    font-weight: bold;
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 10px;
  }

  p {
    color: var(--Grey-1);
    font-size: 1rem;
    text-align: center;
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
    width: 740px;
    margin-top: auto;

    h2 {
      text-align: start;
    }

    span {
      width: 100%;
      font-size: 18px;
    }

    p {
      width: 100%;
      text-align: start;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: center;

  @media (min-width: 800px) {
    min-width: 740px;
    max-width: 779.73px;
    margin-bottom: 20px;
  }

  button {
    color: #ffffff;
    font-size: 1rem;
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
    width: 740px;
  }
`;

export const StyledForm = styled.div`
  width: 280px;
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
    width: 740px;
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

  @media (min-width: 800px) {
    img {
      height: 20px;
    }
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
  width: 280px;
  height: 416.37px;
  position: relative;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
    min-width: 740px;
    max-width: 779.73px;
    height: 400px;
    flex-direction: row;
  }
`;

export const ModalDiv = styled.div`
  width: 91%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 30px;
  overflow-y: auto;

  div {
    overflow-y: auto;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f8f9fabf;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555;
    }
  }
`;

export const TechImg = styled.div`
  width: 400px;
  display: none;
  justify-content: center;
  align-items: center;

  svg {
    width: 150px;
    height: 150px;
    color: #ffffff75;
  }

  @media (min-width: 800px) {
    display: flex;
  }
`;
