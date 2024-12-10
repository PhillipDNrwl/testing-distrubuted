import { render } from '@testing-library/react';

import UiLib6 from './ui-lib6';

describe('UiLib6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib6 />);
    expect(baseElement).toBeTruthy();
  });
});
