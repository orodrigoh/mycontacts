import styled, { css } from 'styled-components';

export const Input = styled.input`
  height: 52px;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-size: 1rem;
  transition: border-color 0.2s ease-in;
  appearance: none;
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main} ;
    border-color: ${theme.colors.danger.main}!important ;
  `}
`;
