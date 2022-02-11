import { FC } from 'react';
import { fetchSiteBannerData, SiteBannerData } from '../../api/fetch';
import usePromise from 'react-use-promise';
import { AccountMenu } from './AccountMenu';
import { CategoryPicker } from './CategoryPicker';
import { CountryPicker } from './CountryPicker';
import { Logo } from './Logo';
import { SearchBar } from './SearchBar';

export const HeaderBanner: FC<{ data: SiteBannerData }> = ({ data: { alertText, ctaText, url } }) => (
  <div className="bg-[#333] text-white font-semibold flex justify-center items-center p-2.5">
    <a href={url}>
      {alertText} - <u>{ctaText}</u>
    </a>
  </div>
);

export const Header: FC = () => {
  // "Fetch" banner data
  // For purposes of this demo, we ignore the case of fetch failure
  const [bannerData] = usePromise(fetchSiteBannerData, []);

  return (
    <>
      {bannerData && <HeaderBanner data={bannerData} />}
      <header className="sticky top-0 z-10">
        <div className="bg-white flex flex-row pr-[22px] h-[70px] items-center gap-6">
          <Logo />
          <CountryPicker />
          <CategoryPicker />
          <SearchBar />
          <a href="#" className="whitespace-nowrap">
            Corporate <span className="hidden 2xl:inline">Gifting</span>
          </a>
          <a href="#" className="hidden xl:inline">
            Help
          </a>
          <AccountMenu />
        </div>
      </header>
    </>
  );
};
