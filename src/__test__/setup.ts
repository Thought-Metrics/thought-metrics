// setup.ts

// 2. Mock fetch API globally
import { vi } from 'vitest';

// 👇 Global fetch mock
globalThis.fetch = vi.fn(() => Promise.resolve({
    json: () => Promise.resolve({ message: 'Mocked response' }),
})
) as unknown as typeof fetch;

// 👇 Global variable
globalThis.__APP_VERSION__ = '1.0.0';

// 👇 Optional: global spy, timer, etc.
vi.useFakeTimers();