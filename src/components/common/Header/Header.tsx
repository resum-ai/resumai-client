import { HeaderLogo } from '@/assets/Icon/HeaderLogo';
import { Flex } from '@/components/Wrapper';
import styled from '@emotion/styled';

export const Header = () => {
  return (
    <Wrapper justify="flex-start">
      <HeaderLogo />
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100vw;
  height: 92px;
  padding: 0px 92px;
  box-sizing: border-box;
`;
