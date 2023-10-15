import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { IPhoto } from '@/interfaces/IPhoto';
import colors from '@/theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { imagesActions } from '@/redux/images/reducer';
import { Button } from '@/theme/styles';

type Props = {
  item: IPhoto;
};

const ImagesListItem: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();
  const photos = useSelector(selectImages.getSavedImages);

  const isSaved = useMemo(() => photos.find(photo => photo.id === item.id), [photos, item]);

  const handleClick = useCallback(() => {
    if (isSaved) {
      dispatch(imagesActions.removeImage(item));
    } else {
      dispatch(imagesActions.addImage(item));
    }
  }, [dispatch, item, isSaved]);

  return (
    <ImageWrapper key={item.id}>
      <Image
        src={item.ulr}
        alt={''}
        fill
        sizes="(max-width: 922px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true}
        quality={50}
      />
      <Content className="content">
        <ContentWrapper className="contentWrapper">
          <div>Likes: {item.likes}</div>
          <Button onClick={handleClick}>{isSaved ? 'Delete' : 'Save'}</Button>
        </ContentWrapper>
      </Content>
    </ImageWrapper>
  );
};

export default ImagesListItem;

const ImageWrapper = styled.div`
  height: 500px;
  position: relative;

  img {
    border-radius: 5px;
    object-fit: cover;
  }

  .content {
    height: 0;
    transition: height 0.3s;
  }

  &:hover {
    .content {
      height: 100%;
    }
  }
`;

const Content = styled.div`
  position: absolute;
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);

  .contentWrapper {
    opacity: 0;
    transition: opacity 0.3s;
  }

  &:hover {
    .contentWrapper {
      opacity: 1;
    }
  }
`;

const ContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${colors.whiteText};
  bottom: 0;
  padding: 0 30px 20px;
`;
