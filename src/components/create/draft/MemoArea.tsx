import styled from '@emotion/styled';
import { FoldMemo } from '../../common/Memo/FoldMemo';
import { Flex, Text } from '../../Wrapper';
// import { Plus } from '@/assets/Icon/Plus';
import { useQuery } from '@tanstack/react-query';
import { memoApi } from '@/apis/resume';

// TODO 메모 api 연결
export const MemoArea = () => {
  const { data } = useQuery({
    queryKey: ['memoArea', 'memo'],
    queryFn: memoApi.GET_MEMO_All
  });

  return (
    <Wrapper>
      <Title justify="space-between">
        <Text typo="sub_title" color="black">
          내 메모
        </Text>
        {/* <Plus /> */}
      </Title>
      <Content direction="column" justify="flex-start" gap={8}>
        {data?.results.map((el, index) => (
          <FoldMemo
            key={index + 'memoArea'}
            title={el.title}
            content={el.content}
            createdAt={new Date(el.updated_at)}
          />
        ))}
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
