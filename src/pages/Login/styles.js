import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 402.69px;
  display: flex;
  margin-top: 81px;
  flex-direction: column;
  justify-content: space-between;
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
    font-size: 9.772px;
  }

  p {
    color: var(--Grey-1);
    margin: 27px 0 17.6px;
    font-size: 9.62602px;
    font-weight: 600;
  }

  @media (min-width: 800px) {
    width: 100%;
    height: 100vmin;
    display: flex;
    margin-top: 0px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 144.06px;
      margin-bottom: 35px;
    }
  }
`;

export const Form = styled.form`
  height: 402.69px;
  width: 92.5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Grey-3);
  justify-content: center;
  border-radius: 3.20867px;

  @media (min-width: 800px) {
    width: 369px;
    height: 502px;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    align-items: center;

    h2 {
      font-size: 18px;
      font-weight: 700;
      margin-bottom: 10px;
    }

    div {
      margin-bottom: 24px;
      height: auto;

      label {
        font-size: 12.182px;
        margin-bottom: 22px;
      }
    }

    button {
      margin-bottom: 34px;
      font-size: 16px;
      height: 48px;
    }

    p {
      margin: 0 0 22px 0;
      font-size: 12px;
      font-weight: 600;
    }
  }
`;
