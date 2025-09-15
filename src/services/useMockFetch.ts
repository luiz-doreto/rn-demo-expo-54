import { useState } from 'react';

const ITEMS_PER_PAGE = 20;

const useMockFetch = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>('');
  const [currentOffset, setCurrentOffset] = useState<number>(0);

  const fetchData = async () => {
    setLoading(true);
    setError('');
    try {
      const newData = [...Array(ITEMS_PER_PAGE).keys()].map(num => {
        const itemNumber =
          currentOffset === 0 ? num + 1 : num + currentOffset + 1;
        return {
          id: itemNumber,
          name: `Item ${itemNumber}`,
        };
      });

      await new Promise(resolve => setTimeout(resolve, 1000));
      setData([...data, ...newData]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
      setCurrentOffset(currentOffset + ITEMS_PER_PAGE);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default useMockFetch;
