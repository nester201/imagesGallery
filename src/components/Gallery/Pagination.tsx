import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { imagesActions } from '@/redux/images/reducer';
import { useRouter } from 'next/navigation';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const Pagination = () => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const page = useSelector(selectImages.getCurrenPage);

  const handleClockNext = useCallback(() => {
    dispatch(imagesActions.nextPage());
    scrollToTop();
    push(`/gallery/${(page + 1).toString()}`);
  }, [dispatch, push, page]);

  const handleClockPrev = useCallback(() => {
    dispatch(imagesActions.prevPage());
    scrollToTop();
    push(`/gallery/${(page - 1).toString()}`);
  }, [dispatch, push, page]);

  return (
    <Container>
      {page > 1 ? <Action onClick={handleClockPrev}>Prev</Action> : <div />}
      <Action onClick={handleClockNext}>Next</Action>
    </Container>
  );
};

export default Pagination;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Action = styled.div`
  cursor: pointer;
`;
