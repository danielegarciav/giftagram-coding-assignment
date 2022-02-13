import { getProductIdFromCurrentUrl, getProductType } from './util';

jest.mock(window, () => ({
    location: {
        href: () => 'http://localhost:3000/?productId=1234',
    },
}));

test('gets correct product ID from current URL', () => {
    const result = getProductIdFromCurrentUrl();
    expect(result).toBe(1234);
});

