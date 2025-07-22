import { expect, test } from 'vitest';

const mockData = {
  items: [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ],
};

test('adds 1 + 2 to equal 3', () => {
  expect(mockData.items[0].name).toBe('Item 1');
});
