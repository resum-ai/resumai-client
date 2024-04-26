/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import styled from '@emotion/styled';
import { Flex, Space } from '../../Wrapper';
import { css } from '@emotion/react';
import {
  ResumeGenerateRequest,
  ResumeGenerateResponse,
  ResumeGuidelineResponse,
  resumeApi
} from '@/apis/resume';
import TextField from './TextField';
import { useFormContext } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ResumeTitle } from '../ResumeTitle';

interface DraftAreaProps extends ResumeGuidelineResponse {
  values: {
    company: string;
    position: string;
    due_date: string;
    question: string;
  };
}

export const DraftArea = forwardRef<HTMLDivElement, DraftAreaProps>(
  ({ result, values }, ref) => {
    const { watch } = useFormContext();
    const navigate = useNavigate();

    // TODO 확인 필요
    const generateResumeMutation = useMutation({
      mutationFn: (payload: ResumeGenerateRequest) =>
        resumeApi.POST_RESUME_GENERATE(payload),
      onSuccess: (data: ResumeGenerateResponse) => {
        console.log('success', data);
        navigate(`/create/chat/${data.id}`);
      }
    });

    const onSubmit = () => {
      const payload: ResumeGenerateRequest = {
        ...values,
        answers: [watch('question1'), watch('question2'), watch('question3')],
        favor_info: watch('favor_info'),
        free_answer: watch('free_answer'),
        guidelines: result ?? [],
        title: watch('title') ?? '지원 동기'
      };

      generateResumeMutation.mutate(payload);
    };

    return (
      <Wrapper
        ref={ref} // Passing the ref to the Wrapper component
        direction="column"
        align="flex-start"
        justify="flex-start">
        <ResumeTitle
          title={watch('title')}
          onSubmit={onSubmit}
          submitButtonText="자기소개서 생성"
        />
        <Line />
        <Flex
          direction="column"
          justify="flex-start"
          align="flex-start"
          padding="40px 50px"
          gap={20}
          css={css`
            overflow-y: scroll;
          `}>
          {result?.map((el, index) => (
            <TextField
              key={index}
              title={`${index + 1}. ${el}`}
              value=""
              label={`question${index + 1}`}
            />
          ))}
          <TextField
            title={
              '4. 자기소개서에 입력하고 싶은 내용을 자유롭게 입력해 주세요.'
            }
            value=""
            label="free_answer"
          />
          <TextField
            title={'5. 지원하시려는 회사의 우대사항을 입력해 주세요.'}
            value=""
            label="favor_info"
          />
        </Flex>
      </Wrapper>
    );
  }
);

const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.palette.gray2};
  width: 942px;
  max-height: 700px;
  overflow: hidden;
`;

const Line = styled(Space)`
  width: calc(100% - 103px);
  height: 1px;
  background-color: ${({ theme }) => theme.palette.gray2};
  margin: 0px 50px 0px 53px;
`;
