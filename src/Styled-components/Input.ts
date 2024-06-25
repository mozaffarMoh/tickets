import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  primary?: boolean;
}

const Input = styled.input<InputProps>`
  padding: 10px;
  border: 2px solid ${({ primary }) => (primary ? 'blue' : 'gray')};
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  &:focus {
    border-color: ${({ primary }) => (primary ? 'darkblue' : 'darkgray')};
  }
`;

export default Input;