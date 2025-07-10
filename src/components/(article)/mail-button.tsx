'use client';

import { Button } from '~/components/button';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'sonner';

const SUCCESS_MESSAGE = '의견을 보내주셔서 감사합니다.';

export function MailButton() {
  const handleMailClick = () => {
    toast.info(SUCCESS_MESSAGE);
  };
  return (
    <Button icon={<HiOutlineMail />}>
      <a href="mailto:gwansik.kim@gwansik.dev" onClick={handleMailClick}>
        의견 보내기
      </a>
    </Button>
  );
}
