import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICategory } from '@/interfaces/ICategory';
import { IPhoto } from '@/interfaces/IPhoto';

type SortBy = 'latest' | 'popular';
interface IImagesState {
  activeCategory: ICategory;
  sort: SortBy;
  savedImage: IPhoto[];
  currentPage: number;
}

const initialState: IImagesState = {
  activeCategory: {
    id: 1,
    category: 'Animals',
  },
  sort: 'latest',
  savedImage: [],
  currentPage: 1,
};

export const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<ICategory>) {
      state.activeCategory = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortBy>) {
      state.sort = action.payload;
    },
    addImage(state, action: PayloadAction<IPhoto>) {
      state.savedImage = [...state.savedImage, action.payload];
    },
    removeImage(state, action: PayloadAction<IPhoto>) {
      state.savedImage = state.savedImage.filter(image => image.id !== action.payload.id);
    },
    nextPage(state) {
      state.currentPage++;
    },
    prevPage(state) {
      if (state.currentPage > 1) {
        state.currentPage--;
      }
    },
    firstPage(state) {
      state.currentPage = initialState.currentPage;
    },
  },
});

export const imagesActions = imagesSlice.actions;
