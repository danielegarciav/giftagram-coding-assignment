import { FC } from 'react';

interface AboutFeature {
  img: string;
  title: string;
  text: string;
}

const features: AboutFeature[] = [
  {
    img: 'https://www.giftagram.com/images/noun_Gift_743127.svg',
    title: 'Best in class gifts',
    text: 'Browse our curated selection of products from local retailers and national brands to find the perfect gift.',
  },
  {
    img: 'https://www.giftagram.com/images/noun_paper-plane_781311.svg',
    title: 'No address needed',
    text: 'Browse our curated selection of products from local retailers and national brands to find the perfect gift.',
  },
  {
    img: 'https://www.giftagram.com/images/noun_delivery-truck_454398.svg',
    title: 'We do the heavy gifting',
    text: 'You’re all done! We’ll take care of confirming the delivery address with your recipient and sending your thoughtful gift.',
  },
];

export const AboutSection: FC = () => {
  return (
    <div className="flex flex-col w-full mb-14">
      <img
        className="w-full h-96 object-cover"
        src="https://www.giftagram.com/images/rsz_giftagram-box-pink-3-1.jpg"
        alt="Giftagram banner"
      />
      <div className="flex flex-row justify-center gap-8 -mt-14">
        {features.map(({ img, title, text }, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-[16rem] gap-4">
            <img src={img} alt={title} className="bg-white rounded-full shadow-lg w-24 h-24 object-contain" />
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-neutral-700">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
