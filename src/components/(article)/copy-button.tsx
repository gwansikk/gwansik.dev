'use client';

import { Button } from '~/components/button';
import { HiOutlineLink } from 'react-icons/hi';
import { toast } from 'sonner';

const SUCCESS_MESSAGE = '링크가 복사됐어요.';

export function CopyButton() {
  const handleCopyClick = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('utm_source', 'share');
    url.searchParams.set('utm_medium', 'social');
    url.searchParams.set('utm_campaign', 'blog-share');

    navigator.clipboard.writeText(url.toString()).then(() => {
      toast.success(SUCCESS_MESSAGE);
    });
  };

  return (
    <Button icon={<HiOutlineLink />} onClick={handleCopyClick}>
      공유하기
    </Button>
  );
}
