import {
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <section>
      <div className="border-t-4 py-5">
        <Image
          src="/brand/brand.svg"
          alt="the news logo"
          width={184}
          height={44}
        />
      </div>
      <div className="border-t-[1px] border-b-[1px]">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center gap-6">
            <Image src="/icons/link.svg" alt="link" width={22} height={22} />
            <span>Copyright &copy; 2025 – The News – All right reserved</span>
          </div>
          <div className="flex gap-4 items-center">
            <InstagramOutlined />
            <LinkedinOutlined />
            <YoutubeOutlined />
            <TwitterOutlined />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
