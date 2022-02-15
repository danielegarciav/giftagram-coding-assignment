import { splitTextIntoParagraphsAndLines } from './ProductView';

jest.mock('swiper', () => ({}));
jest.mock('swiper/react/swiper-react', () => ({}));

describe('splitTextIntoParagraphsAndLines', () => {
  it('empty string', () => {
    expect(splitTextIntoParagraphsAndLines('')).toStrictEqual([['']]);
  });
  it('simple string', () => {
    expect(splitTextIntoParagraphsAndLines('hello')).toStrictEqual([['hello']]);
  });
  it('1 paragraph - with whitespace', () => {
    expect(splitTextIntoParagraphsAndLines('\r\nhello\r\n')).toStrictEqual([['hello']]);
  });
  it('2 paragraphs - 1 line each', () => {
    expect(splitTextIntoParagraphsAndLines('hello\r\n\r\nworld')).toStrictEqual([['hello'], ['world']]);
  });
  it('2 paragraphs - 2 lines each', () => {
    expect(splitTextIntoParagraphsAndLines('hello\r\nworld\r\n\r\nfoo\r\nbar')).toStrictEqual([
      ['hello', 'world'],
      ['foo', 'bar'],
    ]);
  });
});
