// Button.tsx
import styled from 'styled-components';

// Define a styled button component
const Button = styled.button<any>`
  background-color: ${({ primary }) => primary == "11" ? 'blue' : 'gray'};;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition : all 1s ease;

  &:hover {
    background-color: darkblue;
  }
`;

export default Button;
