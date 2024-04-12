/* eslint-disable react-hooks/exhaustive-deps */
import { UserInfoRequest } from '@/apis/user';
import { Flex, Space, Text } from '@/components/Wrapper';
import { Input, WriteButton } from '@/components/common';
import { Dropdown } from '@/components/common/Dropdown';
import { JOB_POSITIONS } from '@/constants/position';
import { useAuth } from '@/hooks/useAuth';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

// TODO 로그인 후 수정하기 분기 처리
export const Setting = () => {
  const { setValue, watch, register } = useForm();
  const { userInfoUpdateMutation } = useAuth();

  useEffect(() => {
    userInfoUpdateMutation.mutate(watch() as UserInfoRequest);
  }, [watch('position')]);

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
          width: 344px;
        `}>
        <Text typo="sub_text" color="gray5">
          &nbsp;&nbsp;&nbsp;&nbsp;닉네임
        </Text>
        <Space height={12} />
        <Input
          width={344}
          height={48}
          value={''}
          type="default"
          placeholder="닉네임 입력하기"
          {...register('username')}
        />
        <Space height={32} />
        <Text typo="sub_text" color="gray5">
          &nbsp;&nbsp;&nbsp;&nbsp;직무
        </Text>
        <Space height={12} />
        <Dropdown
          label="position"
          value={watch('position')}
          setValue={setValue}
          options={JOB_POSITIONS}
          width={344}
        />
      </Flex>
      <Space height={65} />
      <WriteButton variant="lg">저장하기</WriteButton>
    </Flex>
  );
};
