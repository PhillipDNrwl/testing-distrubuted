import { render } from '@testing-library/react';

import UiLib3 from './ui-lib3';

describe('UiLib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib3 />);
    expect(baseElement).toBeTruthy();
  });
});
