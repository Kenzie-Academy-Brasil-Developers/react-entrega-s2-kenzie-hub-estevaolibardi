import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0;

  @media (min-width: 800px) {
  }
`;

export const StyledInput = styled.input`
  width: 87.8%;
  height: 38.5px;
  background-color: var(--Grey-2);
  border: 2px solid var(--Grey-2);
  border-radius: 3px;
  color: var(--grey-1);
  padding-left: 10px;
  font-size: 12.9865px;

  @media (min-width: 800px) {
    height: 48px;
    box-sizing: border-box;
    font-size: 16.2426px;
  }
`;
