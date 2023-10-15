import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { ifProp } from 'styled-tools';
import { imagesActions } from '@/redux/images/reducer';

const Sort = () => {
  const sortBy = useSelector(selectImages.getSortBy);
  const dispatch = useDispatch();

  const handleClickPopular = useCallback(() => {
    dispatch(imagesActions.setSortBy('popular'));
  }, [dispatch]);

  const handleClickDate = useCallback(() => {
    dispatch(imagesActions.setSortBy('latest'));
  }, [dispatch]);

  return (
    <Container>
      Sort by:
      <Action onClick={handleClickPopular} $active={sortBy === 'popular'}>
        Popular
      </Action>
      <Action onClick={handleClickDate} $active={sortBy === 'latest'}>
        Date
      </Action>
    </Container>
  );
};

export default Sort;

const Container = styled.div`
  display: flex;
  gap: 5px;
  margin: 10px 0;
`;

const Action = styled.div<{ $active: boolean }>`
  cursor: pointer;

  ${ifProp(
    '$active',
    css`
      text-decoration: underline;
    `
  )};
`;
