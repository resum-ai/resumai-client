/* eslint-disable @typescript-eslint/no-unused-vars */
import { CaretDown, CaretUp } from '@/assets/Icon/Caret';
import { SelectedIcon } from '@/assets/Icon/SelectedIcon';
import { Flex, Text } from '@/components/Wrapper';
import { useModal } from '@/hooks/useModal';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { FieldValues, UseFormSetValue } from 'react-hook-form';

interface DropdownProps {
  label: string;
  value: string;
  setValue: UseFormSetValue<FieldValues>;
  placeholder?: string;
  options: string[];
  width: number;
}

// TODO 검색해서 선택하기 기능
export const Dropdown = ({
  label,
  value,
  setValue,
  placeholder = '항목을 선택하세요.',
  options,
  width
}: DropdownProps) => {
  const { isOpen, modalRef, toggleModal } = useModal();

  return (
    <DropdownWrapper
      width={width}
      direction="column"
      ref={modalRef}
      onClick={toggleModal}>
      <DropdownButton>
        <Flex justify="space-between">
          <Text typo="sub_text" color={'gray4'}>
            {value ? value : placeholder}
          </Text>
          {isOpen ? <CaretUp /> : <CaretDown />}
        </Flex>
      </DropdownButton>
      {isOpen && (
        <DropdwonSelect>
          {options.map((option, index) => (
            <DropdownElement
              key={`${option}-${index}`}
              isSelected={value === option || false}
              onClick={() => setValue(label, option)}>
              {option}
              {value === option && <SelectedIcon />}
            </DropdownElement>
          ))}
        </DropdwonSelect>
      )}
    </DropdownWrapper>
  );
};

const DropdownWrapper = styled(Flex)<{ width: number }>`
  width: ${({ width }) => width}px;

  position: relative;

  ${({ theme }) => theme.typo.sub_text};
  line-height: 125%;
`;

const DropdownButton = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  padding: 11.86px 8px 11.86px 16px;
  box-sizing: border-box;

  border: 1px solid ${({ theme }) => theme.palette.gray2};
  border-radius: 8px;

  width: 100%;
`;

const DropdwonSelect = styled.ul`
  color: ${({ theme }) => theme.palette.gray4};
  background-color: ${({ theme }) => theme.palette.white};
  border: 1px solid ${({ theme }) => theme.palette.gray2};
  padding: 8px 4px;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.25);

  width: 100%;
  height: 284px;
  overflow: scroll;

  position: absolute;
  top: 56px;
  z-index: 99;

  list-style-type: none;
  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const DropdownElement = styled.li<{ isSelected: boolean }>`
  cursor: pointer;

  list-style-type: none;
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  border-radius: 8px;
  padding: 10px 16px;
  box-sizing: border-box;

  ${({ isSelected, theme }) =>
    isSelected
      ? css`
          background-color: ${theme.palette.blue_10};
          border: 1px solid ${theme.palette.blue_70};
          color: ${theme.palette.black};
          font-weight: 700;
        `
      : css`
          :hover {
            background-color: ${theme.palette.gray1};
          }
        `}
`;
