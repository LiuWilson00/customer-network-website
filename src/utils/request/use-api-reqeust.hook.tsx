import { useState, useEffect } from 'react';
import { apiClient, RequestConfig } from './api-client';

interface ApiResponse<T> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}

// const sortedJSONStringify = (obj: any) => {
//   if (!obj) return JSON.stringify(obj);
//   const sortedObj = JSON.parse(JSON.stringify(obj, Object.keys(obj).sort()));
//   return JSON.stringify(sortedObj);
// };

function useApiRequest<T>(config: RequestConfig | null): ApiResponse<T> {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(config !== null);

  useEffect(() => {
    if (!config) {
      setIsLoading(false);
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await apiClient(config);
        setData(response);
        setError(null);
      } catch (err: any) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

  }, [config]);

  return { data, error, isLoading };
}

export default useApiRequest;