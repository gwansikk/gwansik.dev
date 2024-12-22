'use client';

import Button from '@/components/button';
import { HiOutlineMail } from 'react-icons/hi';

const MailButton = () => {
  const handleClickClick = () => {
    window.location.href = 'mailto:gwansik.kim@gwansik.dev';
  };

  return (
    <Button icon={<HiOutlineMail />} onClick={handleClickClick}>
      의견 보내기
    </Button>
  );
};

export default MailButton;
