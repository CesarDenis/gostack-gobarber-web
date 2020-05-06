import styled from 'styled-components';

export const Container = styled.label`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;

  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }

  & + & {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    color: #f4ede8;

    &::placeholder {
      color: #666360;
    }
  }
`;
