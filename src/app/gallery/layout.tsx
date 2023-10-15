'use client';
import React from 'react';
import styled from 'styled-components';
import colors from '@/theme/colors';
import Sort from '@/components/Gallery/Sort';
import Categories from '@/components/Categories/Categories';
import Pagination from '@/components/Gallery/Pagination';

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Wrapper>
        <Sort />
        <Categories />
      </Wrapper>
      {children}
      <Pagination />
    </Container>
  );
}

const Container = styled.div`
  background-color: ${colors.background};
  padding: 0 20px 20px;
  position: relative;
`;

const Wrapper = styled.div`
  position: sticky;
  top: 60px;
  background-color: ${colors.background};
  z-index: 10;
  padding: 10px 0 20px;
`;
