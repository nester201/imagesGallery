'use client';
import { useEffect, useState } from 'react';
import { IPhoto } from '@/interfaces/IPhoto';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { selectImages } from '@/redux/images/selectors';
import { normalizeData } from '@/utils/normalizesPhoto';

const API_KEY = '8VrrlII9bGFY08k_zBupZFhlTARMyxdXMQrMkYY8Ztc';

const API_URL = 'https://api.unsplash.com/search/photos';

const perPage = 12;

const useGetImages = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const page = useSelector(selectImages.getCurrenPage);
  const query = useSelector(selectImages.getActiveCategory).category;
  const sortBy = useSelector(selectImages.getSortBy);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const imagesData = await axios.get(API_URL, {
          headers: {
            Authorization: `Client-ID ${API_KEY}`,
          },
          params: {
            page,
            per_page: perPage,
            order_by: sortBy,
            query,
          },
        });
        if (imagesData.data) {
          const photos = normalizeData(imagesData.data.results);
          setPhotos(photos);
        }
      } catch (error) {
        console.error('Ошибка:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page, sortBy]);

  return { photos, loading };
};

export default useGetImages;
