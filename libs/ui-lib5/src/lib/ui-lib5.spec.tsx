import { render } from '@testing-library/react';

import UiLib5 from './ui-lib5';

describe('UiLib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib5 />);
    expect(baseElement).toBeTruthy();
  });
});
