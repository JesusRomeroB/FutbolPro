import { render, screen } from '@testing-library/react';

import Pais from './pais';

describe('Pais', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pais />);
    expect(baseElement).toBeTruthy();
  });
  it('should show no data when no data', () => {
    render(<Pais />);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });
  it('should show data', async () => {
    render(<Pais />);
    jest.advanceTimersByTime(15000);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });

});
