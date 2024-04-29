import { Send } from '@/assets/Icon/Send';
import { Flex } from '@/components/Wrapper';
import { Input } from '@/components/common';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { ChatBalloonProps } from './ChatBalloon';
import { theme } from '@/styles';

// TODO trim 이용 공백 제거
interface ChatInputProps {
  chats: ChatBalloonProps[];
  setChats: React.Dispatch<React.SetStateAction<ChatBalloonProps[]>>;
}

export const ChatInput = ({ chats, setChats }: ChatInputProps) => {
  const { register, watch, setValue } = useFormContext();

  const handleSendClick = () => {
    setChats([...chats, { isUser: true, text: watch('chat') }]);
    setValue('chat', undefined);
  };
  return (
    <Wrapper>
      <Input
        height={68}
        value={watch('chat')}
        {...register('chat')}
        placeholder="원하는 피드백을 입력해주세요."
        rightElement={
          <Send
            onClick={handleSendClick}
            color={watch('chat') ? theme.palette.blue_100 : theme.palette.gray3}
          />
        }
      />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  padding: 0px 40px;
`;
