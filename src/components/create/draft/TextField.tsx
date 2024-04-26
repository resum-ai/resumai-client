/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import { Flex, Text } from '../../Wrapper';
import { Input, InputProps } from '../../common';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps extends InputProps {
  title: string;
  value: string;
  label: string;
}

const TextField = forwardRef<HTMLTextAreaElement, TextFieldProps>(
  ({ title, value, label }, _ref) => {
    const { register } = useFormContext();
    return (
      <Flex direction="column" align="flex-start" justify="flex-start" gap={22}>
        <Text typo="sub_title" color="black">
          {title}
        </Text>
        <Input
          value={value}
          placeholder="내용을 입력하세요"
          height={200}
          multiline={true}
          {...register(`${label}`)}
        />
      </Flex>
    );
  }
);

export default TextField;
