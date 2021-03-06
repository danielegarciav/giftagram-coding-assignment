// window.location testing based on
// https://www.benmvp.com/blog/mocking-window-location-methods-jest-jsdom/

import { getProductIdFromCurrentUrl, getProductType } from './util';

const originalLocationObj = window.location;
const defaultLocationHref = 'http://localhost:3000';

const setWindowLocation = (href: string) => {
  // @ts-ignore
  delete window.location;

  // @ts-ignore
  window.location = Object.defineProperties(
    {},
    {
      ...Object.getOwnPropertyDescriptors(originalLocationObj),
      href: {
        configurable: true,
        value: href,
      },
    },
  );
};

afterEach(() => {
  setWindowLocation(defaultLocationHref);
});

afterAll(() => {
  // restore `window.location` to the `jsdom` `Location` object
  window.location = originalLocationObj;
});

describe('getProductIdFromCurrentUrl', () => {
  it('returns proper ID from valid URL', () => {
    setWindowLocation('http://localhost:3000?productId=12345');
    expect(getProductIdFromCurrentUrl()).toBe(12345);
  });

  it('returns NaN on invalid URL', () => {
    setWindowLocation('http://localhost:3000?productId=invalid');
    expect(getProductIdFromCurrentUrl()).toBeNaN();
  });

  it('defaults to ID 1006', () => {
    expect(getProductIdFromCurrentUrl()).toBe(1006);
  });
});

describe('getProductType', () => {
  it('gets the correct type on a product with a single type', () => {
    expect(getProductType({ type: '123' } as any)).toBe(123);
  });

  it('gets the first product type on a product with multiple types', () => {
    expect(getProductType({ type: '111,222,333' } as any)).toBe(111);
  });

  it('returns 0 by default', () => {
    expect(getProductType({ type: '' } as any)).toBe(0);
  });
});
