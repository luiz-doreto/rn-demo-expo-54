import { useQuery } from '@tanstack/react-query';
import { AmiiboData } from '@/models/amiibos.model';

const useHomeViewModel = () => {
  const fetchAmiibos = async () => {
    const response = await fetch('https://www.amiiboapi.com/api/amiibo/?name=');
    const data = await response.json();
    return data.amiibo;
  };

  const { error, data, isLoading } = useQuery<AmiiboData[], Error>({
    queryKey: ['amiibos'],
    queryFn: fetchAmiibos,
  });

  return {
    data,
    isLoading,
    error,
  };
};

export default useHomeViewModel;
