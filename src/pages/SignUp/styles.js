import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  /* @media (min-width: 800px) {
    height: auto;
  } */
`;

export const Wrapper = styled.div`
  width: 369px;
  padding-bottom: 50px;
`;

export const StyledForm = styled.form`
  padding: 20px;
  background-color: var(--Grey-3);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 5px;

  h2 {
    font-size: 1.3rem;
  }

  p {
    color: var(--Grey-1);
    font-size: 14px;
    font-weight: 400;
    margin-top: 18px;
    margin-bottom: 20px;
  }

  span {
    color: var(--primary-Negative);
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    text-align: start;
    color: #ff427f;
  }

  button {
    background-color: var(--color-primary-Negative);
    border-color: var(--color-primary-Negative);
  }

  label {
    width: 87%;
    margin-bottom: 10px;
  }

  /* @media (min-width: 800px) {
    height: 1000px;
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  } */
`;

export const ContainerHeader = styled.div`
  display: flex;
  margin-top: 49.46px;
  margin-bottom: 25.32px;
  justify-content: space-between;
  img {
    height: 65%;
  }

  button {
    width: 79.54px;
    padding: 8px;
    background-color: var(--Grey-3);
    border-radius: 4px;
    border: none;
    color: #ffffff;
  }

  p {
    margin-top: 18px;
  }

  /* @media (min-width: 800px) {
    margin-bottom: 15px;
  } */
`;
