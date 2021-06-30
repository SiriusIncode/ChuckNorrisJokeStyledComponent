import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #aaa;
  font-size: 14px;
  margin-bottom: 1rem;
  outline: none;
  &::placeholder {
    color: #aaa;
  }
  &:hover {
    border: 1px solid black;
  }
  &:focus {
    border: 2px solid rgb(0, 100, 50);
  }
`;

export const Textarea = styled(Input)`
  height: 4rem;
`;

export default Input;
