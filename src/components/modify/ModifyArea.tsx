import styled from '@emotion/styled';
import { Flex } from '../Wrapper';
import { ResumeTitle } from '../create/ResumeTitle';
import { Input } from '../common';
import { css } from '@emotion/react';
import { useParams } from 'react-router-dom';
import { resumeApi } from '@/apis/resume';
import { useQuery } from '@tanstack/react-query';

export const ModifyArea = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['chat', id],
    queryFn: () => resumeApi.GET_RESUME(id)
  });

  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      {data && (
        <>
          <ResumeTitle
            title={data.title}
            onSubmit={() => {}}
            submitButtonText="저장하기"
            disabled={false}
          />
          {/* <TextField title={''} value={''} label={'hi'} height={728} /> */}
          <Flex
            css={css`
              padding: 16px;
            `}>
            <Input value={data.content} multiline height={540} />
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
