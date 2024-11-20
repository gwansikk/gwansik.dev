'use client';

import Button from '@/app/components/button';

const MailButton = () => {
  const handleClickClick = () => {
    window.location.href = 'mailto:gwansik.kim@gwansik.dev';
  };

  return <Button onClick={handleClickClick}>의견 보내기</Button>;
};

export default MailButton;
