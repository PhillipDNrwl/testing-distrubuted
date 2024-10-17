import { render } from '@testing-library/react';

import UiLib2 from './ui-lib2';

describe('UiLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
