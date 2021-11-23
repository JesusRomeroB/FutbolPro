import { render } from '@testing-library/react';

import Pais from './pais';

describe('Pais', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Pais />);
    expect(baseElement).toBeTruthy();
  });
});
