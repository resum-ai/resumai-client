/* eslint-disable no-sparse-arrays */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import { resumeApi } from '@/apis/resume';
import { Flex } from '@/components/Wrapper';
import { ResumeTitle } from '@/components/create/ResumeTitle';
import { ChatArea } from '@/components/create/chat/ChatArea';
import { ChatBalloonProps } from '@/components/create/chat/ChatBalloon';
import { ChatInput } from '@/components/create/chat/ChatInput';
import styled from '@emotion/styled';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const Chat = () => {
  const { watch, setValue } = useFormContext();
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ['chat', id],
    queryFn: () => resumeApi.GET_RESUME_CHAT_HISTORY(Number(id))
  });

  const [chats, setChats] = useState<ChatBalloonProps[]>([]);

  useEffect(() => {
    if (data?.results) {
      setChats([
        {
          is_user: false,
          content:
            '다음은 AI가 작성한 자기소개서입니다. 수정을 원하시는 부분이 있으신가요?'
        },
        ...data.results
      ]);
    }
  }, [data]);

  const sendChatMutation = useMutation({
    mutationFn: ({ id, query }: { id: number; query: string }) =>
      resumeApi.POST_RESUME_CHAT({ id: id, query: query }),
    onMutate: () => {
      setValue('chat', 'AI가 답변을 생성하는 중입니다.');
    },
    onSuccess: ({ answer }: { answer: string }) => {
      setChats((prev) => {
        setValue('chat', '');
        return [...prev, { is_user: false, content: answer }];
      });
    },
    onError: () => {}
  });

  const handleSendClick = () => {
    setChats((prev) => {
      return [...prev, { is_user: true, content: watch('chat') }];
    });
    sendChatMutation.mutate({ id: Number(id), query: watch('chat') });
  };

  // TODO onSubmit 부분 작성하고 뮤테이션 걸기

  const onSubmit = () => {};

  return (
    <Wrapper justify="flex-start" align="flex-start" direction="column">
      <ResumeTitle
        title={watch('title')}
        onSubmit={onSubmit}
        submitButtonText="완성하기"
        disabled={!watch('checkedChat')}
      />
      {chats && <ChatArea chats={chats} />}
      <ChatInput handleSendClick={handleSendClick} />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  height: calc(100vh - 214px);
  width: 100%;
  min-width: fit-content;

  background-color: ${({ theme }) => theme.palette.white};
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
`;
