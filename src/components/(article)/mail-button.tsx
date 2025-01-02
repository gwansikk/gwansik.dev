'use client';

import Button from '@/components/button';
import { HiOutlineMail } from 'react-icons/hi';

const MailButton = () => {
  return (
    <Button icon={<HiOutlineMail />}>
      <a href="mailto:gwansik.kim@gwansik.dev">의견 보내기</a>
    </Button>
  );
};

export default MailButton;
