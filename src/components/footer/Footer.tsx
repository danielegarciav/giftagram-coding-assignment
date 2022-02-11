import { FC } from 'react';
import { FooterLinks } from './FooterLinks';

export const Footer: FC = ({ children }) => (
  <footer>
    <hr />
    <div className="mx-12">
      {children}
      <FooterLinks />
    </div>
    <hr />
    <div className="flex flex-row max-w-5xl mx-auto mt-4 mb-12 items-center">
      <span className="text-[0.7rem] text-neutral-500 mr-auto">
        © 2022 Giftagram Inc., All Rights Reserved
      </span>
      <div className="flex flex-row gap-4">
        <a href="#">Press</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>
  </footer>
);
