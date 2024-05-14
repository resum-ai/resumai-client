import { Flex, Text } from '@/components/Wrapper';
import styled from '@emotion/styled';

export const MyPage = () => {
  return (
    <div>
      <UserInfoArea direction="column" gap={12}>
        <Text typo="title" color="black">
          닉네임
        </Text>
        <Flex>
          <Text typo="main_text" color="black">
            작성 중인 자소서:
          </Text>
          <Text typo="main_text" color="blue_100">
            &nbsp;5개
          </Text>
        </Flex>
      </UserInfoArea>
    </div>
  );
};

const UserInfoArea = styled(Flex)`
  width: 100vw;
  height: 180px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray2};
`;
