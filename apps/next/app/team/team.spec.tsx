import { render } from '@testing-library/react';

import Team from './team';

describe('Team', () => {
  it('should render successfully', () => {
    const countryName = 'Colombia';
    const { baseElement } = render(<Team countryName={countryName} />);
    expect(baseElement).toBeTruthy();
  });
});
