import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 45px;
  padding: 0px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px 0px 0px 5px;
  background-color: var(--Grey-4);

  :hover {
    background-color: var(--Grey-2);
  }

  p {
    font-size: 12px;
    color: var(--Grey-1);
    font-weight: 400;
  }
  p:hover {
    cursor: pointer;
  }

  @media (min-width: 800px) {
    width: 95%;
    height: 45px;
    cursor: pointer;
    padding: 0px 10px;
    margin-bottom: 10px;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: var(--Grey-0);
  border: 0;
  width: 40px;
  height: 45px;
  font-size: 10px;

  svg {
    width: 20px;
    height: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const ContStyledButton = styled.div`
  background-color: #151517d1;

  color: var(--Grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  width: 40px;
  height: 45px;
  font-size: 10px;

  :hover {
    cursor: pointer;
  }
`;

export const Cont = styled.div`
  width: 91%;
  display: flex;
  justify-content: center;
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 0px;
  width: 100%;

  @media (min-width: 800px) {
    width: 55%;
    margin-right: 50px;
  }
`;
