import { Flex, Space, Text } from '@/components/Wrapper';
import { Input, WriteButton } from '@/components/common';
import { css } from '@emotion/react';

// TODO 로그인 후 수정하기 분기 처리
export const Setting = () => {
  return (
    <Flex direction="column" align="center">
      <Space height={114} />
      <Text color="gray5" typo="title">
        회원 정보 입력하기
      </Text>
      <Space height={48} />
      <Flex
        direction="column"
        align="flex-start"
        css={css`
          width: 304px;
        `}>
        <Text typo="sub_text" color="gray5">
          닉네임
        </Text>
        <Space height={12} />
        <Input
          width={304}
          height={48}
          value={''}
          type="default"
          placeholder="닉네임 입력하기"
        />
        <Space height={32} />
        <Text typo="sub_text" color="gray5">
          직무
        </Text>
        <Space height={12} />
        <Input
          width={304}
          height={48}
          value={''}
          type="default"
          placeholder="직무 선택"
        />
      </Flex>
      <Space height={65} />
      <WriteButton variant="lg">저장하기</WriteButton>
    </Flex>
  );
};
