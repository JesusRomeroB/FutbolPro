import { render, screen } from '@testing-library/react';

import Team from './team';

describe('Team', () => {
  const countryName = 'Colombia';
  it('should render successfully', () => {
    const { baseElement } = render(<Team countryName={countryName} />);
    expect(baseElement).toBeTruthy();
  });
  it('should show no data when no data', () => {
    render(<Team countryName={countryName} />);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });
});
