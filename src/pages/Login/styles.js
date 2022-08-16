import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;

  img {
    margin-bottom: 19.39px;
    width: 110px;
  }

  h2 {
    color: var(--Grey-0);
    font-size: 14.439px;
    font-weight: bold;
  }

  label {
    color: var(--Grey-0);
    width: 87%;
    margin-bottom: 18px;
    font-size: 0.9rem;
  }

  p {
    color: var(--Grey-1);
    margin: 27px 0 17.6px;
    font-size: 0.8rem;
    font-weight: 600;
  }

  @media (min-width: 800px) {
  }
`;

export const Wrapper = styled.div`
  width: 280px;

  @media (min-width: 375px) {
    width: 310px;
  }

  @media (min-width: 425px) {
    width: 330px;
  }

  @media (min-width: 800px) {
    width: 369px;
  }
`;

export const Form = styled.form`
  height: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  justify-content: center;
  border-radius: 3.20867px;

  h2 {
    font-size: 1rem;
  }

  @media (min-width: 800px) {
    height: 502px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 1.1rem;
      font-weight: 700;
      margin-bottom: 10px;
    }

    div {
      /* margin-bottom: 24px; */
      /* height: 95px;
      width: 87.8%; */

      label {
        font-size: 1rem;
        margin-bottom: 10px;
      }
    }

    p {
      margin: 0 0 12px 0;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
