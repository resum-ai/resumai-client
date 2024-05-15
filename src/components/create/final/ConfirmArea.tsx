import { Flex } from '@/components/Wrapper';
import styled from '@emotion/styled';
import { ConfirmTitle } from './ConfirmTitle';
import { css } from '@emotion/react';
import { ConfirmQuestion } from './ConfirmQuestion';
import { useNavigate, useParams } from 'react-router-dom';

export const ConfirmArea = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <Wrapper direction="column" align="flex-start" justify="flex-start">
      <Flex
        css={css`
          padding: 44px 124px 42px 54px;
        `}>
        <ConfirmTitle title="세아제강 어쩌고" leftDay={6} />
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
        <ConfirmQuestion title="1.djdjdjd" content="내용내용" />
        <ConfirmQuestion title="2.djdjdjd" content="내용내용" />
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
  overflow: hidden;
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
