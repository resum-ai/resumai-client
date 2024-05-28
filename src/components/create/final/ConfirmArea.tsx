import { Flex } from '@/components/Wrapper';
import styled from '@emotion/styled';
import { ConfirmTitle } from './ConfirmTitle';
import { css } from '@emotion/react';
import { ConfirmQuestion } from './ConfirmQuestion';
import { useNavigate, useParams } from 'react-router-dom';
import { resumeApi } from '@/apis/resume';
import { useQuery } from '@tanstack/react-query';
import { useFormContext } from 'react-hook-form';

export const ConfirmArea = () => {
  const { id } = useParams();
  const { watch } = useFormContext();
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['final'],
    queryFn: () => resumeApi.GET_RESUME(id)
  });
  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      <Flex
        css={css`
          padding: 44px 124px 42px 54px;
        `}>
        <ConfirmTitle title={watch('title')} leftDay={6} />
        <ModifyButton onClick={() => navigate(`/modify/${id}`)}>
          수정하기
        </ModifyButton>
      </Flex>
      <Flex
        direction="column"
        align="flex-start"
        justify="flex-start"
        gap={24}
        css={css`
          padding: 0px 124px 42px 54px;
        `}>
        <ConfirmQuestion
          title={'1. ' + data?.question ?? ''}
          content={data?.content ?? ''}
        />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.palette.gray2};
  width: 942px;
  height: 700px;
  overflow: scroll;
`;

const ModifyButton = styled.button`
  padding: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  ${({ theme }) => css`
    border: 1px solid ${theme.palette.blue_100};
    color: ${theme.palette.blue_100};
    ${theme.typo.main_text};
  `}
`;
