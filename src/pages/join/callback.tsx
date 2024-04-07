/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const { kakaoLoginMutation } = useAuth();

  useEffect(() => {
    const code = searchParams.get('code');
    if (code) {
      kakaoLoginMutation.mutate(code);
    }
  }, [searchParams]);

  return <></>;
};
