import React from 'react';
import { useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import ImagesList from '@/components/ImagesList/ImagesList';

const Favorites = () => {
  const photos = useSelector(selectImages.getSavedImages);

  return <ImagesList photos={photos} />;
};

export default Favorites;
