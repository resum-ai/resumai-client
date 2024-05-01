/* eslint-disable @typescript-eslint/no-unused-vars */
import { TooltipBackground } from '@/assets/Icon/TooltipBackground';
import styled from '@emotion/styled';
import { useFormContext } from 'react-hook-form';
import { Flex } from '../Wrapper';
import { Input } from '../common';

interface TitleModifyTooltip {
  open: boolean;
  toggleOpen: () => void;
}

export const TitleModifyTooltip = ({
  open,
  toggleOpen
}: TitleModifyTooltip) => {
  const { register, watch, setValue } = useFormContext();

  const handleButtonClick = () => {
    toggleOpen();
  };

  return (
    <>
      {open && (
        <Wrapper justify="flex-start" align="flex-start">
          <TooltipBackground>
            <Flex gap={8}>
              <Input
                className="input"
                width={278}
                height={44}
                value={watch('title')}
                {...register('title')}
              />
              <Button onClick={handleButtonClick}>수정하기</Button>
            </Flex>
          </TooltipBackground>
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled(Flex)`
  position: absolute;
  z-index: 2;
  top: -32px;
  left: 132px;
`;

const Button = styled.button`
  width: 94px;
  height: 44px;

  ${({ theme }) => theme.typo.sub_text};
  color: ${({ theme }) => theme.palette.white};
  background-color: ${({ theme }) => theme.palette.blue_100};
  border-radius: 4px;
  margin-bottom: 6px;
`;
