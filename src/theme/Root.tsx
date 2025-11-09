import React from 'react';
import WeChatQRCode from '@site/src/components/WeChatQRCode';

export default function Root({children}) {
  return (
    <>
      {children}
      <WeChatQRCode />
    </>
  );
}
