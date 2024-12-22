'use client';

import Button from '@/components/button';
import { HiOutlineLink } from 'react-icons/hi';

const CopyButton = () => {
  const handleCopyClick = async () => {
    await navigator.clipboard.writeText(window.location.href);
    alert('해당 URL이 클립보드에 복사됐어요.');
  };

  return (
    <Button icon={<HiOutlineLink />} onClick={handleCopyClick}>
      공유하기
    </Button>
  );
};

export default CopyButton;
