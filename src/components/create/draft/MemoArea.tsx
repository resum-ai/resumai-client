import styled from '@emotion/styled';
import { FoldMemo } from '../../common/Memo/FoldMemo';
import { Flex, Text } from '../../Wrapper';
import { Plus } from '@/assets/Icon/Plus';

// TODO 메모 api 연결
export const MemoArea = () => {
  return (
    <Wrapper>
      <Title justify="space-between">
        <Text typo="sub_title" color="black">
          내 메모
        </Text>
        <Plus />
      </Title>
      <Content direction="column" justify="flex-start" gap={8}>
        <FoldMemo
          title="제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케"
          content="아니 내가 그때 이거 활동하면서 진짜 좋았었다? 근데 왜 좋았는지 기억이 안나는거야 그래서 프리폴리오를 써야하나봐 거기에 감상 좀 제대로제때 적을 걸 그랬엉
아니 내가 그때 이거 활동하면서 진짜 좋았었다? 근데 왜 좋았는지 기억이 안나는거야 그래서 프리폴리오를 써야하나봐 거기에 감상 좀 제대로제때 적을 걸 그랬엉"
          createdAt={new Date()}
        />
        <FoldMemo
          title="제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케 제목이 한 줄이라면 요러케"
          content="아니 내가 그때 이거 활동하면서 진짜 좋았었다? 근데 왜 좋았는지 기억이 안나는거야 그래서 프리폴리오를 써야하나봐 거기에 감상 좀 제대로제때 적을 걸 그랬엉
아니 내가 그때 이거 활동하면서 진짜 좋았었다? 근데 왜 좋았는지 기억이 안나는거야 그래서 프리폴리오를 써야하나봐 거기에 감상 좀 제대로제때 적을 걸 그랬엉"
          createdAt={new Date()}
        />
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.palette.gray2};

  width: 578px;
  max-height: 700px;

  /* box-sizing: content-box;
  padding: 28px 35px; */
`;

const Title = styled(Flex)`
  padding: 26px 20px 20px 40px;
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray2};
`;

const Content = styled(Flex)`
  width: 100%;
  max-height: 616px;
  padding: 28px 57px 28px 35px;
  background-color: ${({ theme }) => theme.palette.bg_light};
  overflow: scroll;
  border-radius: 0px 0px 8px 8px;
`;
