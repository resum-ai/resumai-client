import { Flex, Text } from '../Wrapper';
import { Input } from '../common';

interface TextFieldProps {
  title: string;
  value: string;
}
export const TextField = ({ title, value }: TextFieldProps) => {
  return (
    <Flex direction="column" align="flex-start" justify="flex-start" gap={22}>
      <Text typo="sub_title" color="black">
        {title}
      </Text>
      <Input
        value={value}
        placeholder="내용을 입력하세요"
        height={200}
        multiline
      />
    </Flex>
  );
};
