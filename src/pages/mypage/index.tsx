import { memoApi, resumeApi } from '@/apis/resume';
import { AddMemo } from '@/assets/Icon/AddMemo';
import { Flex, Space, Text } from '@/components/Wrapper';
import { Memo } from '@/components/common/Memo/Memo';
import { MemoModalContent } from '@/components/common/Memo/MemoModalContent';
import { Resume } from '@/components/mypage/Resume';
import { ToggleTab } from '@/components/mypage/ToggleTab';
import { useModal } from '@/hooks/useModal';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

export const MyPage = () => {
  const { openModal } = useModal();
  const { data: resumeData } = useQuery({
    queryKey: ['myPage', 'resume'],
    queryFn: resumeApi.GET_RESUME_All
  });
  const { data: memoData } = useQuery({
    queryKey: ['myPage', 'memo'],
    queryFn: memoApi.GET_MEMO_All
  });
  const [tab, setTab] = useState(true);

  return (
    <Flex direction="column" justify="flex-start" align="flex-start">
      <UserInfoArea direction="column" gap={12}>
        <Text typo="title" color="black">
          닉네임
        </Text>
        <Flex>
          <Text typo="main_text" color="black">
            작성 중인 자소서:
          </Text>
          <Text typo="main_text" color="blue_100">
            &nbsp;{resumeData?.results.length}개
          </Text>
        </Flex>
      </UserInfoArea>
      <Space height={64} />
      <Flex justify="space-between">
        <ToggleTab state={tab} setState={setTab} />
        {tab === false && (
          <MemoButton
            onClick={() =>
              openModal({
                content: <MemoModalContent date={new Date()} />
              })
            }>
            <AddMemo />
            메모 추가
          </MemoButton>
        )}
      </Flex>
      <Space height={64} />
      <Flex>
        <ItemWrapper tab={tab}>
          {tab
            ? resumeData?.results.map((el, index) => (
                <Resume
                  key={index}
                  title={el.title}
                  due_date={el.due_date}
                  company={el.company}
                  content={el.content}
                  is_finished={false}
                  is_liked={false}
                />
              ))
            : memoData?.results.map((el, index) => (
                <Memo
                  key={index + 'memo'}
                  type={'sm'}
                  title={el.title}
                  content={el.content}
                  createdAt={new Date(el.updated_at)}
                />
              ))}
        </ItemWrapper>
      </Flex>
      <Space height={192} />
    </Flex>
  );
};

const UserInfoArea = styled(Flex)`
  height: 180px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray2};
`;

const ItemWrapper = styled.div<{ tab: boolean }>`
  display: grid;

  place-items: center;
  gap: 24px;

  ${({ tab }) =>
    tab
      ? css`
          grid-template-columns: repeat(2, 1fr);
        `
      : css`
          grid-template-columns: repeat(3, 1fr);
        `}
`;

const MemoButton = styled.button`
  border-radius: 8px;
  padding: 8px 16px;

  display: flex;
  gap: 12px;
  align-items: center;

  ${({ theme }) => css`
    ${theme.typo.sub_title};
    color: ${theme.palette.white};
    background-color: ${theme.palette.blue_70};
  `};
`;
