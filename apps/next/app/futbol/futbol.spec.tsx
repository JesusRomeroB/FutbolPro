import { render } from '@testing-library/react';

import Futbol from './futbol';

describe('Futbol', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Futbol />);
    expect(baseElement).toBeTruthy();
  });
});
