import styled from "styled-components";

const ComentBody = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 0;
  box-sizing: border-box;
  padding-right: 1rem;
`;

export const ComentAvatar = styled.div`
  width: 6rem;
  height: 5rem;
  margin-right: 1rem;
  background-color: ${(props) => props.background};
`;

export const UserName = styled.p`
  color: rgba(0, 0, 0, 0.45);
  margin-top: 0;
  font-size: 12px;
`;

export const CommentDate = styled.p`
  color: #ccc;
  margin-top: 0;
  font-size: 12px;
  margin-left: 0.5rem;
`;

export default ComentBody;
