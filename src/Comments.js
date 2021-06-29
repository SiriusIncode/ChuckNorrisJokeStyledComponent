import React, { useState } from "react";
import "./styles.css";
import Wrapper, { Comment, JokeCommentUserWrapper } from "./Wrapper";
import ComentBody, {
  ComentAvatar,
  UserName,
  CommentDate
} from "./ComentContent";
import { dateToString } from "./helpers";
import Pagination from "./Pagination";

const Comments = ({ commentsList }) => {
  const [page, setPage] = useState(1);
  const [range, setRange] = useState(10);

  return (
    <div>
      <Wrapper>
        {commentsList
          .slice((page - 1) * range, page * range)
          .map((comment, index) => (
            <Comment
              key={comment.time ? comment.time : comment.id}
              index={index}
            >
              <ComentAvatar background={comment.icoColor}></ComentAvatar>
              <Wrapper>
                <JokeCommentUserWrapper>
                  <UserName>{comment.name}</UserName>
                  {comment.time ? (
                    <CommentDate>{dateToString(comment.time)}</CommentDate>
                  ) : null}
                </JokeCommentUserWrapper>
                <ComentBody>{comment.body}</ComentBody>
              </Wrapper>
            </Comment>
          ))}
      </Wrapper>

      <Pagination
        size={Math.ceil(commentsList.length / range)}
        current={page}
        range={range}
        setRange={setRange}
        onChange={(page) => {
          setPage(page);
        }}
      />
    </div>
  );
};

export default Comments;
