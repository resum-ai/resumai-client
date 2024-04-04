import { theme } from '@/styles';

export interface DropdownItemInterface {
  label: string;
  value: string;
  color?: string;
  background?: string;
}

export const setColor = (
  value: DropdownItemInterface,
  isOpen: boolean
): string => {
  if ((!value || value.value === '') && !isOpen) {
    return theme.palette.gray4;
  } else if (value && value.color && !isOpen) {
    return value.color;
  }
  return theme.palette.black;
};

export const setBackgroundColor = (
  value: DropdownItemInterface,
  isOpen: boolean
): string => {
  if (value && value.background && !isOpen) {
    return value.background;
  }
  return theme.palette.white;
};
