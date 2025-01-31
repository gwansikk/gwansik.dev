'use client';

import Button from '@/components/button';
import { HiOutlineLink } from 'react-icons/hi';
import { toast } from 'sonner';

const SUCCESS_MESSAGE = '링크가 복사됐어요.';

export default function CopyButton() {
  const handleCopyClick = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast.success(SUCCESS_MESSAGE);
    });
  };

  return (
    <Button icon={<HiOutlineLink />} onClick={handleCopyClick}>
      공유하기
    </Button>
  );
}
