import { resumeApi } from '@/apis/resume';
import { Flex } from '@/components/Wrapper';
import { ResumeTitle } from '@/components/create/ResumeTitle';
import { ChatArea } from '@/components/create/chat/ChatArea';
import { ChatBalloonProps } from '@/components/create/chat/ChatBalloon';
import { ChatInput } from '@/components/create/chat/ChatInput';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { useParams } from 'react-router-dom';

export const Chat = () => {
  const { watch } = useFormContext();
  const { id } = useParams();
  const { data, isFetching } = useQuery({
    queryKey: ['chat', id],
    queryFn: () => resumeApi.GET_RESUME_CHAT_HISTORY(Number(id))
  });

  console.log(data, isFetching);

  const [chats, setChats] = useState<ChatBalloonProps[]>([
    {
      isUser: false,
      text: '다음은 AI가 작성한 자기소개서입니다. 수정을 원하시는 부분이 있으신가요?'
    }
  ]);

  const onSubmit = () => {};

  return (
    <Wrapper justify="flex-start" align="flex-start" direction="column">
      <ResumeTitle
        title={watch('title')}
        onSubmit={onSubmit}
        submitButtonText="완성하기"
      />
      <ChatArea chats={chats} />
      <ChatInput chats={chats} setChats={setChats} />
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
