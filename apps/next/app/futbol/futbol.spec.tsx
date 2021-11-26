import { render,screen } from '@testing-library/react';

import Futbol from './futbol';

describe('Futbol', () => {
  const teamId = '582';
  it('should render successfully', () => {
    const { baseElement } = render(<Futbol teamId={teamId}/>);
    expect(baseElement).toBeTruthy();
  });
  it('should show no data when no data', () => {
    render(<Futbol teamId={teamId}/>);
    expect(screen.getByText(/no data/i)).toBeTruthy();
  });
});
