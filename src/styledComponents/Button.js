import styled from "styled-components";

const Button = styled.button`
  background: ${(props) =>
    props.primary
      ? "rgb(0, 150, 50)"
      : props.transparant
      ? "rgba(255, 255, 255, 0)"
      : "rgb(194, 160, 58)"};
  color: ${(props) => (props.transparant ? "black" : "white")};
  font-size: 1em;
  margin: 0.3rem;
  padding: 0.25em 1em;
  border: ${(props) =>
    props.primary
      ? "2px solid rgb(0, 150, 50)"
      : props.transparant
      ? "2px solid black"
      : "2px solid rgb(194, 160, 58)"};
  border-radius: 3px;
  text-transform: uppercase;
  font-size: 12px;
  padding: 0.3rem;
  margin-top: 0;
  outline: none;
  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.primary ? "rgb(0, 100, 50)" : "rgb(194, 110, 58)"};
    border: ${(props) =>
      props.primary
        ? "2px solid rgb(0, 100, 50)"
        : "2px solid rgb(194, 110, 58)"};
  }
`;

export const PaginationButton = styled(Button)`
  min-width: 2rem;
  height: 2rem;
  border: ${(props) => (props.unborded ? "none" : "1px solid #aaa")};
  background-color: ${(props) =>
    props.current ? "rgba(0, 0, 0, 0.2)" : "rgba(255, 255, 255, 0)"};
  color: gray;
  font-size: 1rem;
  &:hover {
    background-color: ${(props) =>
      props.unborded ? "rgba(255, 255, 255, 0)" : "rgba(0, 0, 0, 0.1)"};
    border: ${(props) => (props.unborded ? "none" : "1px solid #aaa")};
    cursor: ${(props) => (props.unborded ? "inherit" : "pointer")};
  }
`;

export default Button;
