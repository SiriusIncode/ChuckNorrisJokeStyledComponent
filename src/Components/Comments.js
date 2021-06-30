import React, { useState } from "react";
import "../styles.css";
import Wrapper, {
  Comment,
  JokeCommentUserWrapper,
} from "../styledComponents/Wrapper";
import ComentBody, {
  ComentAvatar,
  UserName,
  CommentDate,
} from "../styledComponents/ComentContent";
import { dateToString } from "../helpers";
import Pagination from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { changePage } from "../reducers/paginationReducer";
import { setRange } from "../reducers/rangeReducer";

const Comments = ({ commentsList }) => {
  const page = useSelector(state => state.page.value);
  const range = useSelector(state => state.range.value);
  const dispatch = useDispatch();

  return (
    <div>
      <Wrapper>
        {commentsList
          .slice((page - 1) * range, page * range)
          .map((comment, index) => (
            <Comment
              key={comment.id}
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
        setRange={(range) => dispatch(setRange(range))}
        onChange={(page) => dispatch(changePage({ pageNumber: page }))}
      />
    </div>
  );
};

export default Comments;
