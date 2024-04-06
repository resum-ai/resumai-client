import { instance } from '../axois';

export interface KakaoLoginResponse {
  accessToken: string;
  code: string;
}

export interface KakaoLoginFinishResponse {
  access_token: string;
  code: string;
  isUser?: boolean;
}

// TODO userApi 세팅
export const userApi = {
  //카카오 로그인
  GET_KAKAO_LOGIN: async (code: string): Promise<KakaoLoginResponse> => {
    console.log('fetch');
    const response = await instance.get(`/accounts/kakao/login/?code=${code}`);
    return response.data;
  },
  // 카카오 로그인 끝내기
  POST_KAKAO_LOGIN_FINISH: async (
    payload: KakaoLoginResponse
  ): Promise<KakaoLoginFinishResponse> => {
    const response = await instance.post(
      '/accounts/kakao/login/finish',
      payload
    );
    return response.data;
  }
  // 유저 조회
  // GET_MEMBERS: (token: string) =>
  //   api.get('/api/members', {
  //     headers: {
  //       Authorization: token
  //     }
  //   }),
  // 닉네임 추가
  // PATCH_NICKNAME: (nickname: string, token: string) =>
  //   api.patch(
  //     '/api/members/nickname',
  //     { nickname },
  //     {
  //       headers: {
  //         Authorization: token
  //       }
  //     }
  //   )
};
