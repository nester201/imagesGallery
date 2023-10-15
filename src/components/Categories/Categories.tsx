import React from 'react';
import styled from 'styled-components';
import { ICategory } from '@/interfaces/ICategory';
import CategoriesItem from '@/components/Categories/CategoriesItem';
import colors from '@/theme/colors';

const CategoriesData: ICategory[] = [
  {
    id: 1,
    category: 'Animals',
  },
  {
    id: 2,
    category: 'Architecture & Interiors',
  },
  {
    id: 3,
    category: 'Fashion & Beauty',
  },
  {
    id: 4,
    category: 'Nature',
  },
  {
    id: 5,
    category: 'People',
  },
  {
    id: 6,
    category: 'Sports',
  },
  {
    id: 7,
    category: 'Travel',
  },
];

const Categories = () => {
  return (
    <Container>
      {CategoriesData.map(item => (
        <CategoriesItem key={item.id} item={item} />
      ))}
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  box-shadow: 0 2px 10px rgba(71, 118, 230, 0.2);
  border-radius: 10px;
  background-color: ${colors.whiteText};
  display: flex;
  justify-content: center;
  gap: 15px;

  @media (max-width: 880px) {
    display: block;
    height: 255px;
    padding: 10px;
  }
`;
