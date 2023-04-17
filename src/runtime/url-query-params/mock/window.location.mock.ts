import { URL } from 'url';

type MockLocation = {
    href: string;
    assign: jest.Mock;
};

const mockLocation: MockLocation = {
    href: 'https://example.com',
    assign: jest.fn(),
};

Object.defineProperty(window, 'location', {
    value: {
        ...new URL(mockLocation.href),
        get href() {
            return mockLocation.href;
        },
        set href(value) {
            mockLocation.href = value;
        },
        assign: mockLocation.assign,
        replace: jest.fn(),
    },
    writable: true,
});

export default mockLocation;
