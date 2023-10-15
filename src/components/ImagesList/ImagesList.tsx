import React from 'react';
import styled, { css } from 'styled-components';
import ImagesListItem from '@/components/ImagesList/ImagesListItem';
import { ifProp } from 'styled-tools';
import Loader from '@/components/UI/Loader';
import { IPhoto } from '@/interfaces/IPhoto';

type Props = {
  photos: IPhoto[];
  loading?: boolean;
};

const ImagesList: React.FC<Props> = ({ photos, loading }) => {
  return (
    <Container $loading={loading}>
      {loading ? <Loader size={'60px'} /> : <>{photos?.map(item => <ImagesListItem key={item.id} item={item} />)}</>}
    </Container>
  );
};

export default ImagesList;

const Container = styled.div<{ $loading?: boolean }>`
  min-height: 90vh;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1.5fr);
  grid-gap: 10px;

  ${ifProp(
    '$loading',
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `
  )};

  @media (max-width: 922px) {
    grid-template-columns: repeat(2, 1.5fr);
  }

  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1.5fr);
  }
`;
