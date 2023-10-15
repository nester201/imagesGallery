import React, { useCallback } from 'react';
import { ICategory } from '@/interfaces/ICategory';
import styled, { css } from 'styled-components';
import colors from '@/theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { ifProp } from 'styled-tools';
import { imagesActions } from '@/redux/images/reducer';

type Props = {
  item: ICategory;
};

const CategoriesItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectImages.getActiveCategory);

  const handleClick = useCallback(() => {
    dispatch(imagesActions.setCategory(item));
    dispatch(imagesActions.firstPage());
  }, [dispatch, item]);

  return (
    <Container onClick={handleClick} $active={activeCategory.id === item.id}>
      <div style={{ flex: 0, width: 0 }}></div>
      {item.category}
    </Container>
  );
};

export default CategoriesItem;

const Container = styled.div<{ $active?: boolean }>`
  padding: 5px;
  cursor: pointer;
  font-size: 20px;
  color: ${colors.lightText};
  transition: 0.3s all ease-in-out;
  flex: 0 0 auto;

  &:hover {
    font-size: 23px;
  }

  ${ifProp(
    '$active',
    css`
      font-size: 23px;
      color: ${colors.text};
      text-decoration: underline;
    `
  )};
  }
`;
