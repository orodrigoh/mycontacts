import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  border: none;
  background: ${({ theme }) => theme.colors.primary.main};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  color: #fff;
  font-weight: 700;
  padding: 0 16px;

  transition: background 0.2s ease-in;

  &[disabled] {
    background: #CCCCCC;
    cursor: default;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};
    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`;
