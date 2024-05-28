import { privateInstance } from '../axois';

export interface GetMemoResponse {
  id: number;
  created_at: Date;
  title: string;
  content: string;
  updated_at: Date;
  user: number;
}

export interface GetAllMemoResponse {
  count: number;
  next: string;
  previous: string | null;
  results: GetMemoResponse[];
}

export const memoApi = {
  // 메모 전체 가져오기
  GET_MEMO_All: async (): Promise<GetAllMemoResponse> => {
    const response = await privateInstance.get('/memos/all');
    return response.data;
  }
};
