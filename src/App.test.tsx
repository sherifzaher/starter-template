import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from './App';

describe('App Component Test', () => {
  it('Render App Component', () => {
    // Render The Component
    render(<App />);

    // Make Any Events

    // Expect the Component to be
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Modern Vite App');
  });
});
