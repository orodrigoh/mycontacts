import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  strong {
    font-weight: 700;
    font-size: 24px;
  }
  a {
    width: 142px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    border-radius: 4px;

    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 16px;

  header {
    margin-bottom: 8px;
    button {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      span {
        margin-right: 8px;
        font-weight: 700;
        font-size: 16px;
        color: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  padding: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 16px;
  }

  .info {
    .contact-name{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;

      strong {
        font-weight: 700;
        font-size: 16px;
      }
      small {
        font-weight: 700;
        font-size: 12px;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.primary.main};

        background: ${({ theme }) => theme.colors.primary.lighter};
        border-radius: 4px;
        padding: 3px 6px;
      }
    }
    span {
      display: block;
      font-size: 14px;
      line-height: 18px;
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background: transparent;
      border: none;
    }

  }
`;
