import React from 'react';
import { render, screen } from '@testing-library/react';

import Index from '../pages/index';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });
  it('should render team title', () => {
    render(<Index />);
    expect(
      screen.getByRole('heading', {
        name: /lista de paises/i,
      })
    ).toBeTruthy();
  });
});
