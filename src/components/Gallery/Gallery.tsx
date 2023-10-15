'use client';
import React from 'react';
import ImagesList from '@/components/ImagesList/ImagesList';
import useGetImages from '@/hooks/useGetImages';

const Gallery = () => {
  const { photos, loading } = useGetImages();

  return <ImagesList photos={photos} loading={loading} />;
};

export default Gallery;
