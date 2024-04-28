import { useState } from 'react';

export const useOpen = () => {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return { open, toggleOpen };
};
