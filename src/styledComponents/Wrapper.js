import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 90vw;
  width: 100%;
  margin: 0 auto;
`;

export const ButtonsWrapper = styled(Wrapper)`
  justify-content: center;
  margin-bottom: 0.75rem;
`;

export const JokeWrapper = styled(Wrapper)`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const Comment = styled.div`
  padding: 1rem 0;
  width: 90vw;
  display: flex;

  background-color: ${(props) =>
    props.index % 2 !== 0 ? "white" : "rgb(125, 150, 136)"};
`;

export const JokeCommentUserWrapper = styled(JokeWrapper)`
  align-items: flex-start;
  margin-bottom: 0;
`;

export default Wrapper;
