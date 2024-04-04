import { Flex } from '@/components/Wrapper';
import { theme } from '@/styles';
import styled from '@emotion/styled';
import { useModal } from '@/hooks/useModal';
import { FieldValues, UseFormSetValue } from 'react-hook-form';
import {
  DropdownItemInterface,
  setBackgroundColor,
  setColor
} from '@/utils/dropdown';
import { CaretDown, CaretUp } from '@/assets/Icon/Caret';
import { css } from '@emotion/react';

interface DropdownProps {
  options: DropdownItemInterface[];
  label: string;
  value: DropdownItemInterface;
  setValue: UseFormSetValue<FieldValues>;
  placeholder?: string;
  width?: number;
  onClick?: () => void;
}

/**
 * @param {{ label: string; value: string; color: string; background: string; }[]} options: dropdown option 목록
 * @param {string} label: dropdown 고유 label
 * @param { label: string; value: string; color: string; background: string; } value: 현재 선택된 값
 * @param { UseFormSetValue } setValue: dropdown 값 변경을 위한 함수
 * @param {string} placeholder: 선택되지 않은 상태의 텍스트
 * @param {number} width: Dropdown width
 */
export const Dropdown = ({
  options,
  label,
  value,
  setValue,
  placeholder = '선택',
  width = 89,
  onClick
}: DropdownProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();
  const color = setColor(value, isOpen);
  const backgroundColor = setBackgroundColor(value, isOpen);

  return (
    <Container
      ref={modalRef}
      onClick={() => {
        // dropdown 열려 있는 상태에서 item 클릭 시 page초기화
        if (isOpen && onClick) onClick();
        toggleModal();
      }}
      width={width}
      isOpen={isOpen}>
      <DropdownList background={backgroundColor} color={color}>
        <DropdownButton
          justify="space-between"
          css={css`
            width: ${width}px;
            border-radius: 8px;
          `}>
          <DropdownLabel color={color}>
            {value && value.value !== '' && !isOpen ? value.label : placeholder}
          </DropdownLabel>
          <ArrowContainer>
            {isOpen ? <CaretUp /> : <CaretDown />}
          </ArrowContainer>
        </DropdownButton>

        {isOpen && (
          <>
            {options.map((opt, idx) => (
              <DropdownItem
                key={idx}
                onClick={() => setValue(label, opt)}
                isSelected={value ? value.value === opt.value : false}>
                {opt.label}
              </DropdownItem>
            ))}
          </>
        )}
      </DropdownList>
    </Container>
  );
};

const Container = styled.div<{ width: number; isOpen: boolean }>`
  position: relative;
  z-index: ${({ isOpen }) => (isOpen ? 10 : 5)};

  width: ${({ width }) => width}px;
  height: 34px;
`;
const ArrowContainer = styled.div`
  position: absolute;
  right: 32px;
`;
const DropdownButton = styled(Flex)`
  position: relative;

  box-sizing: border-box;
  cursor: pointer;
`;
const DropdownLabel = styled.p<{ color: string }>`
  ${theme.typo.sub_text}
  color: ${({ color }) => color};
`;
const DropdownList = styled.ul<{
  color: string;
  background: string;
}>`
  box-sizing: border-box;

  width: 100%;
  padding: 6px 16px;

  background-color: ${({ background }) => background};
  border: 1px solid ${({ color }) => color};
  border-radius: 8px;
`;
const DropdownItem = styled.li<{ isSelected: boolean }>`
  margin-top: 8px;

  ${theme.typo.sub_text}
  color: ${({ isSelected }) =>
    isSelected ? theme.palette.black : theme.palette.gray5};
  text-align: left;

  cursor: pointer;
`;
