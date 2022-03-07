import styled from "styled-components";

export const Container = styled.div`
  height: 100vmax;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;

  @media (min-width: 800px) {
    height: auto;
  }
`;

export const StyledForm = styled.form`
  width: 92.5%;
  height: 100%;
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
  }

  label {
    width: 87%;
    margin-bottom: 15px;
  }

  @media (min-width: 800px) {
    width: 369px;
    height: 850px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerHeader = styled.div`
  display: flex;
  margin-top: 49.46px;
  margin-bottom: 25.32px;
  justify-content: space-between;
  width: 92.5%;

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

  p {
    margin-top: 18px;
  }

  @media (min-width: 800px) {
    max-width: 366px;
    margin-bottom: 15px;
  }
`;

export const DivSelect = styled.div`
  width: 100%;
  height: 70px;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 87%;
    margin-bottom: 15px;
  }

  select {
    width: 87.8%;
  }
`;
