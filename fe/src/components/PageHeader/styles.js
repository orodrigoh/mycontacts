import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 24px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    gap: 8px;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
    }
    img {
      transform: rotate(-90deg);
    }
    h1 {
      font-size: 24px;
      font-weight: 700;

    }

  }
`;
