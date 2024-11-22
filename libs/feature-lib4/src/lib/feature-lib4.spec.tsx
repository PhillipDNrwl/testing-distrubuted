import { render } from '@testing-library/react';

import FeatureLib4 from './feature-lib4';

describe('FeatureLib4', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLib4 />);
    expect(baseElement).toBeTruthy();
  });
});
