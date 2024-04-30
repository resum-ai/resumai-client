import styled from '@emotion/styled';
import { Flex, Text } from '../Wrapper';
import { MainButton } from '../common';
import { css } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
import { TitleModifyTooltip } from './TitleModifyTooltip';
import { useOpen } from '@/hooks/useOpen';

interface ResumeTitleProps {
  title: string;
  onSubmit: () => void;
  submitButtonText: string;
}

export const ResumeTitle = ({
  title,
  onSubmit,
  submitButtonText
}: ResumeTitleProps) => {
  const { open, toggleOpen } = useOpen();
  const { handleSubmit } = useFormContext();

  return (
    <TitleArea direction="column" align="flex-start" gap={20}>
      <Flex
        justify="space-between"
        align="center"
        css={css`
          height: 50px;
        `}>
        <Flex gap={12} justify="flex-start">
          <Text
            typo="title"
            color="black"
            css={css`
              display: block;
              width: 278px;
              overflow: hidden;
              word-break: break-word;
              white-space: nowrap !important;
              text-overflow: ellipsis;
            `}>
            {title}
          </Text>
          <TitleModifyButton onClick={() => toggleOpen()}>
            수정
          </TitleModifyButton>
        </Flex>
        <MainButton onClick={handleSubmit(onSubmit)}>
          {submitButtonText}
        </MainButton>
      </Flex>
      <Flex
        css={css`
          position: relative;
        `}>
        <TitleModifyTooltip open={open} toggleOpen={toggleOpen} />
      </Flex>
    </TitleArea>
  );
};

const TitleArea = styled(Flex)`
  height: 152px;
  width: 100%;
  padding: 29px 50px 25px 53px;
`;

const TitleModifyButton = styled.button`
  height: 30px;
  background-color: ${({ theme }) => theme.palette.gray1};
  color: ${({ theme }) => theme.palette.gray4};
  padding: 5px 10px;
  border-radius: 4px;
  flex-shrink: 0;
`;
