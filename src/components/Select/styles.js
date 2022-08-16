import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 75px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    width: 87.7%;
  }
`;

export const StyledSelect = styled.select`
  width: 87.7%;
  height: 48px;
  background-color: var(--Grey-2);
  border: 2px solid var(--Grey-2);
  border-radius: 3px;
  color: var(--grey-1);
  padding-left: 10px;
  font-size: 12.9865px;
`;
