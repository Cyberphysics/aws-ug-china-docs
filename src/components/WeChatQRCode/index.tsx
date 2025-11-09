import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

export default function WeChatQRCode(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleWeChatClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href*="wechat-qrcode"]');
      if (link) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('click', handleWeChatClick);
    return () => document.removeEventListener('click', handleWeChatClick);
  }, []);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={() => setIsOpen(false)}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
          ×
        </button>
        <div className={styles.content}>
          <h3>微信扫码关注公众号</h3>
          <img 
            src="/aws-ug-china-docs/img/wechat-official.jpg" 
            alt="微信公众号二维码" 
            className={styles.qrcode}
          />
          <p>扫码关注亚马逊云科技 User Group 公众号</p>
        </div>
      </div>
    </div>
  );
}
