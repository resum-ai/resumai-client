/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const { setCode } = useAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    console.log(code);
    if (code) {
      setCode(code);
    }
  }, [searchParams, setCode]);

  return <></>;
};
