import { render } from '@testing-library/react';

import FeatureLib5 from './feature-lib5';

describe('FeatureLib5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLib5 />);
    expect(baseElement).toBeTruthy();
  });
});
