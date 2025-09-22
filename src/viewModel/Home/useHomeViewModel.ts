import { useQuery } from '@tanstack/react-query';
import { AmiiboData } from '@/models/amiibos.model';
import { useCallback, useEffect } from 'react';
import { useAmiiboStore } from '@/store/useAmiiboStore';
import { CategoriesObj } from '@/store/types';

const useHomeViewModel = () => {
  const { setCategories, categories } = useAmiiboStore();
  const fetchAmiibos = async () => {
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/?name=');
    const data = await response.json();
    return data.amiibo;
  };

  const { error, data, isLoading } = useQuery<AmiiboData[], Error>({
    queryKey: ['amiibos'],
    queryFn: fetchAmiibos,
    staleTime: 50000,
  });

  const _buildCategories = useCallback(() => {
    if (data && data?.length > 0) {
      const categoriesObj = data?.reduce((prev, amiibo) => {
        const prevArray = prev[amiibo.gameSeries]
          ? prev[amiibo.gameSeries]
          : [];

        return {
          ...prev,
          [amiibo.gameSeries]: [...prevArray, amiibo],
        };
      }, {} as CategoriesObj);

      const categories = Object.keys(categoriesObj || {}).map(key => ({
        name: key,
        items: categoriesObj[key],
      }));

      setCategories(categories);
    }
  }, [data, setCategories]);

  useEffect(() => {
    _buildCategories();
  }, [_buildCategories]);

  return {
    data: categories,
    isLoading,
    error,
  };
};

export default useHomeViewModel;
