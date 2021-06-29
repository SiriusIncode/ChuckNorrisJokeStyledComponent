import React, { useState, useEffect } from "react";
import { ButtonsWrapper } from "./Wrapper";
import { PaginationButton } from "./Button";

const Pagination = ({ size, onChange, current, setRange, range }) => {
  const [maxNumberButton, setMaxNumberButton] = useState(5);
  const [rangeOfDisplayButtons, setRangeOfDisplaybuttons] = useState(5);
  const [numratedBuuttons, setNumberatedButtons] = useState([]);
  useEffect(() => {
    const numbers = [];
    for (let i = 0; i < size; i++) {
      numbers.push(i + 1);
    }
    setNumberatedButtons(numbers);
    onChange(1);
    setRangeOfDisplaybuttons(5);
    setMaxNumberButton(5);
  }, [size]);

  const numberButtonClicked = (number, array) => {
    onChange(number);

    if (array.length <= 7) {
      return;
    }

    if (number === array.length - 4 && array.length > 8) {
      setMaxNumberButton(number + 1);
      setRangeOfDisplaybuttons(4);
    }

    if (
      maxNumberButton >= array.length - 1 &&
      number === 4 &&
      array.length === 8
    ) {
      setMaxNumberButton(5);
      setRangeOfDisplaybuttons(5);
    }

    if (number === maxNumberButton) {
      setMaxNumberButton(maxNumberButton + 1);
      setRangeOfDisplaybuttons(4);
    }

    if (number > array.length - 4 && number > 5 && number >= maxNumberButton) {
      setMaxNumberButton(array.length - 1);
      setRangeOfDisplaybuttons(5);
    }

    if (number > maxNumberButton) {
      setMaxNumberButton(number);
      setRangeOfDisplaybuttons(6);
    }

    if (number === 1) {
      setMaxNumberButton(5);
      setRangeOfDisplaybuttons(5);
    }

    if (
      number === maxNumberButton - 2 &&
      number > 4 &&
      maxNumberButton < array.length - 2
    ) {
      setMaxNumberButton(maxNumberButton - 1);
      setRangeOfDisplaybuttons(4);
    }

    if (number === maxNumberButton - 4 && number > 4) {
      setMaxNumberButton(maxNumberButton - 3);
      setRangeOfDisplaybuttons(4);
    }

    if (number === maxNumberButton - 2 && number === 4) {
      setMaxNumberButton(maxNumberButton - 1);
      setRangeOfDisplaybuttons(5);
    }
  };

  const prevPage = () => {
    if (current > 1) {
      numberButtonClicked(current - 1, numratedBuuttons);
    }
  };

  const nextPage = () => {
    if (current < numratedBuuttons.length) {
      numberButtonClicked(current + 1, numratedBuuttons);
    }
  };

  if (numratedBuuttons.length <= 1) return null;

  return (
    <ButtonsWrapper>
      {numratedBuuttons.length > 7 ? (
        <PaginationButton onClick={prevPage}>{"<"}</PaginationButton>
      ) : null}
      {numratedBuuttons.map((number, index, array) => {
        if (
          array.length > 7 &&
          index < maxNumberButton &&
          index > maxNumberButton - rangeOfDisplayButtons
        ) {
          return (
            <PaginationButton
              key={number}
              onClick={() => numberButtonClicked(number, array)}
              current={current === number}
            >
              {number}
            </PaginationButton>
          );
        }

        if (index !== array.lenngth - 1 && index !== 0 && array.length <= 7) {
          return (
            <PaginationButton
              key={number}
              onClick={() => numberButtonClicked(number, array)}
              current={current === number}
            >
              {number}
            </PaginationButton>
          );
        }

        if (
          array.length > 7 &&
          index === maxNumberButton &&
          index !== array.length - 1
        ) {
          return (
            <PaginationButton key={number} unborded>
              ...
            </PaginationButton>
          );
        }
        if (
          number !== 1 &&
          number === maxNumberButton - rangeOfDisplayButtons &&
          maxNumberButton > rangeOfDisplayButtons
        ) {
          return (
            <PaginationButton key={number} unborded>
              ...
            </PaginationButton>
          );
        }
        if (index === array.length - 1 || index === 0) {
          return (
            <PaginationButton
              key={number}
              onClick={() => numberButtonClicked(number, array)}
              current={current === number}
            >
              {number}
            </PaginationButton>
          );
        }
        return null;
      })}
      {numratedBuuttons.length > 7 ? (
        <PaginationButton onClick={nextPage}>{">"}</PaginationButton>
      ) : null}
      <PaginationButton
        as="select"
        value={range}
        onChange={(e) => {
          setRange(e.target.value);
        }}
      >
        <option value={10}>10/page</option>
        <option value={20}>20/page</option>C<option value={50}>50/page</option>
        <option value={100}>100/page</option>
      </PaginationButton>
    </ButtonsWrapper>
  );
};

export default Pagination;
