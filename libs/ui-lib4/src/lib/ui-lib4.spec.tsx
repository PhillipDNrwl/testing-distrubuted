import { render } from '@testing-library/react';

import UiLib4 from './ui-lib4';

describe('UiLib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib4 />);
    expect(baseElement).toBeTruthy();
  });
});
