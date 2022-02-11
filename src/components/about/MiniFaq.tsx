import { Disclosure, Transition } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { FC } from 'react';

interface FaqQuestion {
  label: string;
  answer: string[]; // Each item is a separate paragraph
}

const questions: FaqQuestion[] = [
  {
    label: 'What is Giftagram?',
    answer: [
      'Giftagram’s mobile app is the easiest way to send gifts straight from your smartphone or tablet. We curate a collection of gifts from local and national partners that are leaders in lifestyle and design.',
      'All you need to do is choose the gift you like on the app, select your contact and hit send. We take care of the rest, coordinating with your recipient to ship to their preferred address and delivering your perfect gift.',
    ],
  },
  {
    label: 'Where can I download Giftagram?',
    answer: [
      'You can download Giftagram for iPhone or iPad from the App Store, and for Android devices from the Google Play Store.',
    ],
  },
  {
    label: 'Do I have to create an account to browse Giftagram?',
    answer: [
      'No, you do not need an account to browse or checkout on the web (guest checkout is available). However, registered users get exclusive access to special offers and are the first to know when great new gift options are available.',
    ],
  },
  {
    label: 'I’m a brand and I want to sell on Giftagram - where do I start?',
    answer: [
      'Interested in joining Giftagram’s community of partners? We want to hear from you! Connect with our merchandising team by sending an email to partners@giftagram.com.',
    ],
  },
];

export const MiniFaq: FC = () => (
  <div className="w-full mx-auto flex flex-col max-w-2xl mb-6">
    <h2 className="text-2xl text-center font-semibold mb-4">Frequently Asked Questions</h2>
    <p className="text-lg font-medium mb-2">General</p>
    <hr />
    {questions.map((question, questionIndex) => (
      <Disclosure key={questionIndex}>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full text-lg pt-5 pb-3 text-left focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
              <span>{question.label}</span>
              <ChevronUpIcon
                className={clsx(
                  'w-5 h-5 text-neutral-500 transition duration-200',
                  !open && 'transform rotate-180',
                )}
              />
            </Disclosure.Button>
            <Transition
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="px-4 pb-4 text-sm text-gray-500 flex flex-col gap-4">
                {question.answer.map((a, pIndex) => (
                  <p key={pIndex}>{a}</p>
                ))}
              </Disclosure.Panel>
            </Transition>
            <hr />
          </>
        )}
      </Disclosure>
    ))}
    <button className="text-lg text-neutral-600 font-medium mx-auto my-6 px-16 py-2 rounded border border-solid border-neutral-300">
      See all FAQs
    </button>
  </div>
);
