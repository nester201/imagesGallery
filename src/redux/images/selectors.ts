import { RootState } from '@/redux/store';

export const selectImages = {
  get: (state: RootState) => state.images,
  getActiveCategory: (state: RootState) => selectImages.get(state).activeCategory,
  getSortBy: (state: RootState) => selectImages.get(state).sort,
  getSavedImages: (state: RootState) => selectImages.get(state).savedImage,
  getCurrenPage: (state: RootState) => selectImages.get(state).currentPage,
};
