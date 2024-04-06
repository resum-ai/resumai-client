/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  KakaoLoginFinishResponse,
  KakaoLoginResponse,
  userApi
} from '@/apis/user';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const [code, setCode] = useState<string>('');
  const navigate = useNavigate();

  const { data: kakaoToken } = useQuery({
    queryKey: ['kakaoLogin'],
    queryFn: () => userApi.GET_KAKAO_LOGIN(code),
    enabled: !!code
  });

  // 회원가입
  const kakaoLoginFinishMutation = useMutation({
    mutationFn: (kakaoToken: KakaoLoginResponse) =>
      userApi.POST_KAKAO_LOGIN_FINISH(kakaoToken),
    onSuccess: (data: KakaoLoginFinishResponse) => {
      console.log(data);
      alert('회원가입이 완료됐어요!');
      // TODO 라우팅 경로 상수로 빼기
      navigate('/join/setting');
    },
    onError: (error: unknown) => {
      alert(error);
    }
  });

  useEffect(() => {
    if (kakaoToken) {
      // Query에서 데이터가 성공적으로 반환되면, Mutation 실행
      kakaoLoginFinishMutation.mutate({ ...kakaoToken });
    }
  }, [kakaoToken]);

  return { setCode, kakaoLoginFinishMutation };
};
