import { render } from '@testing-library/react';

import UiLib1 from './ui-lib1';

describe('UiLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
