import '@testing-library/jest-dom/vitest';
import { vi, afterEach } from 'vitest';

vi.mock('next/font/google', () => ({
  Plus_Jakarta_Sans: () => ({ className: 'font-jakarta' }),
}));

// ---------------------------------------------------------------------------
// In-memory localStorage shim
// jsdom provides localStorage, but tests that do vi.stubGlobal('window', undefined)
// can make `localStorage` throw "Cannot read properties of undefined".
// Attaching a real Storage-like object directly to globalThis prevents this.
// ---------------------------------------------------------------------------
class LocalStorageMock {
  private store: Record<string, string> = {};

  clear() {
    this.store = {};
  }

  getItem(key: string): string | null {
    return Object.prototype.hasOwnProperty.call(this.store, key)
      ? this.store[key]
      : null;
  }

  setItem(key: string, value: string) {
    this.store[key] = String(value);
  }

  removeItem(key: string) {
    delete this.store[key];
  }

  get length() {
    return Object.keys(this.store).length;
  }

  key(index: number): string | null {
    return Object.keys(this.store)[index] ?? null;
  }
}

const localStorageMock = new LocalStorageMock();
Object.defineProperty(globalThis, 'localStorage', {
  value: localStorageMock,
  writable: true,
});

afterEach(() => {
  localStorageMock.clear();
});