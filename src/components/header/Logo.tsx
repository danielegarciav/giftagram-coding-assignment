import { FC } from 'react';
import logo from '../../assets/giftagram-logo-black.svg';

export const Logo: FC = () => (
  <a href="#" className="h-[stretch]">
    <img src={logo} alt="Giftagram" className="max-w-none h-[70px]" />
  </a>
);
