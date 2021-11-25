import { render } from '@testing-library/react';

import Futbol from './futbol';

describe('Futbol', () => {
  it('should render successfully', () => {
    const teamId = '582';
    const { baseElement } = render(<Futbol teamId={teamId}/>);
    expect(baseElement).toBeTruthy();
  });
});
