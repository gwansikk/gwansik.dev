'use client';

import Button from '@/components/button';
import { HiOutlineLink } from 'react-icons/hi';

const CopyButton = () => {
  const handleCopyClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        alert('링크가 복사되었어요.');
      })
      .catch(() => {
        alert('링크 복사에 실패했어요.');
      });
  };

  return (
    <Button icon={<HiOutlineLink />} onClick={handleCopyClick}>
      공유하기
    </Button>
  );
};

export default CopyButton;
