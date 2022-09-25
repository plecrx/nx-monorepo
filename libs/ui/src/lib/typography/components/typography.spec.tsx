import { render } from '@testing-library/react';

import * as Typography from '../typography';

describe('Typography', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Typography.Nickel />);
    expect(baseElement).toBeTruthy();
  });
});
