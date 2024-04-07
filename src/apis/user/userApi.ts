import { instance, privateInstance } from '../axois';

export interface KakaoLoginResponse {
  access_token: string;
  code: string;
  isUser?: boolean;
}

export interface UserInfoRequest {
  username: string;
  position: string;
  profile_image?: string;
}

export interface UserInfoResponse {
  id: number;
  username: string;
  position: string;
  profile_image: string;
}

// TODO userApi 세팅
export const userApi = {
  // 카카오 로그인
  POST_KAKAO_LOGIN: async (code: string): Promise<KakaoLoginResponse> => {
    const response = await instance.post('/accounts/kakao/login/', {
      code: code
    });
    return response.data;
  },
  // 유저 정보 업데이트
  PUT_USER_INFO: async (
    payload: UserInfoRequest
  ): Promise<UserInfoResponse> => {
    const response = await privateInstance.put('/accounts/update/', {
      ...payload
    });
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
