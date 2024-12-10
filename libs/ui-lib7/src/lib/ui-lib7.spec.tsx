import { render } from '@testing-library/react';

import UiLib7 from './ui-lib7';

describe('UiLib7', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib7 />);
    expect(baseElement).toBeTruthy();
  });
});
