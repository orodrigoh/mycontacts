import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 74px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputSearchContainer = styled.div`
    width: 100%;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    border: none;
    padding: 0 16px;
    margin-top: 48px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    &::placeholder {
      color: #BCBCBC;
    }
  }
`;
