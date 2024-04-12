/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  KakaoLoginResponse,
  UserInfoRequest,
  UserInfoResponse,
  userApi
} from '@/apis/user';
import { setCookie } from '@/utils/cookie';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();

  // 회원가입
  const kakaoLoginMutation = useMutation({
    mutationFn: (code: string) => userApi.POST_KAKAO_LOGIN(code),
    onSuccess: (data: KakaoLoginResponse) => {
      // TODO 라우팅 경로 상수로 빼기
      navigate('/join/setting');
      setCookie('access_token', data.access_token, 7);
    },
    onError: (error: unknown) => {
      // alert(error);
    }
  });

  // 회원 정보 수정
  const userInfoUpdateMutation = useMutation({
    mutationFn: (userInfo: UserInfoRequest) => userApi.PUT_USER_INFO(userInfo),
    onSuccess: (data: UserInfoResponse) => {
      alert('회원가입이 완료됐어요!');
      // TODO 라우팅 경로 상수로 빼기
      navigate('/create/draft');
    },
    onError: (error: unknown) => {
      // alert(error);
    }
  });

  return { kakaoLoginMutation, userInfoUpdateMutation };
};
