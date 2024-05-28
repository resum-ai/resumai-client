import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { ResumeTitle } from '../create/ResumeTitle';
import { Input } from '../common';
import { css } from '@emotion/react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  GetResumeResponse,
  UpdateResumeRequest,
  resumeApi
} from '@/apis/resume';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

export const ModifyArea = () => {
  const navigate = useNavigate();
  const { watch, register, setValue } = useFormContext();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['modify', id],
    queryFn: () => resumeApi.GET_RESUME(id)
  });

  useEffect(() => {
    setValue('title', data?.title);
    setValue('modifyContent', data?.content);
  }, [data]);

  const putResumeMutation = useMutation({
    mutationFn: (payload: UpdateResumeRequest) =>
      resumeApi.PUT_RESUME_UPDATE(payload),
    onSuccess: (data: GetResumeResponse) => {
      console.log('success', data);
      alert('자기소개서를 저장했습니다.');
      navigate(`/mypage`);
    }
  });

  // TODO 200 응답 뜨는데 수정 안 되는 에러
  const onSubmit = () => {
    const payload: UpdateResumeRequest = {
      id: id ?? '',
      title: watch('title') ?? '지원 동기',
      position: data?.position ?? '',
      content: watch('modifyContent') ?? '',
      due_date: data?.due_date ?? '',
      is_finished: false,
      is_liked: false
    };

    putResumeMutation.mutate(payload);
  };

  // TODO 제목 data.title 말고 수정할 수 있도록
  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      {data && (
        <>
          <ResumeTitle
            title={watch('title')}
            onSubmit={onSubmit}
            submitButtonText="저장하기"
            disabled={false}
          />
          <Flex
            css={css`
              padding: 16px;
            `}>
            <Input
              value={watch('modifyContent')}
              multiline
              height={540}
              {...register('modifyContent')}
            />
          </Flex>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.palette.gray2};
  width: 942px;
  height: 700px;
  overflow: hidden;
`;
