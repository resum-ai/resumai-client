import { privateInstance } from '../axois';

export interface ResumeGuidelineResponse {
  result?: string[];
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

export interface ResumeGenerateRequest {
  answers: string[];
  company: string;
  due_date: string;
  favor_info: string;
  free_answer: string;
  guidelines: string[];
  position: string;
  question: string;
  title: string;
}

export interface ResumeGenerateResponse {
  id: number;
}

export interface ChatHistoryResponse {
  count: number;
  results: { created_at: Date; content: string; is_user: boolean }[];
}

export interface GetResumeResponse {
  id: string;
  title: string;
  poistion: string;
  company: string;
  question: string;
  content: string;
  due_date: string;
  created_at: Date;
  updated_at: Date;
  is_finished: boolean;
  is_liked: boolean;
}

export const resumeApi = {
  // 가이드라인 생성
  GET_RESUME_GUIDELINES: async (
    question: string
  ): Promise<ResumeGuidelineResponse> => {
    const response = await privateInstance.get('/resume/guidelines', {
      params: { question: question }
    });
    return response.data;
  },
  // 자기소개서 생성
  POST_RESUME_GENERATE: async (
    props: ResumeGenerateRequest
  ): Promise<ResumeGenerateResponse> => {
    const response = await privateInstance.post('/resume/generate', {
      ...props
    });
    return response.data;
  },
  // 채팅 내역 조회
  GET_RESUME_CHAT_HISTORY: async (id: number): Promise<ChatHistoryResponse> => {
    const response = await privateInstance.get(`/resume/${id}/chatHistory`, {
      params: { id: id, page: 1 }
    });

    return response.data;
  },
  // 채팅 대화 전송
  POST_RESUME_CHAT: async ({
    id,
    query
  }: {
    id: number;
    query: string;
  }): Promise<{ answer: string }> => {
    const response = await privateInstance.post(`/resume/${id}/chat`, {
      query: query
    });

    return response.data;
  },
  // 자기소개서 하나 가져오기
  GET_RESUME: async (id: string | undefined): Promise<GetResumeResponse> => {
    const response = await privateInstance.get(`/resume/${id}`);
    return response.data;
  }
};
