import { AmiiboData } from '../models/amiibos.model';

export interface CategoriesObj {
  [key: string]: AmiiboData[];
}

export interface Category {
  name: string;
  items: AmiiboData[];
}

export interface AmiiboStore {
  favorites: AmiiboData[];
  addFavorite: (item: AmiiboData) => void;
  removeFavorite: (item: AmiiboData) => void;
  clearFavorites: () => void;
  categories: Category[];
  setCategories: (categories: Category[]) => void;
}
