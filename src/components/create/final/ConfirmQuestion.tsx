import { Copy } from '@/assets/Icon/Copy';
import { Space, Text } from '@/components/Wrapper';
import { copyToClipboard } from '@/utils/copyToClipboard';

interface ConfirmQuestion {
  title: string;
  content: string;
}

export const ConfirmQuestion = ({ title, content }: ConfirmQuestion) => {
  return (
    <div>
      <Text typo="sub_title" color="black">
        {title}
        <Copy onClick={() => copyToClipboard(content)} />
      </Text>
      <Space height={14} />
      <Text typo="main_text" color="gray4">
        {content}
      </Text>
    </div>
  );
};
