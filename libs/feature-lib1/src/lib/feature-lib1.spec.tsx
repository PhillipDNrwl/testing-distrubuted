import { render } from '@testing-library/react';

import FeatureLib1 from './feature-lib1';

describe('FeatureLib1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLib1 />);
    expect(baseElement).toBeTruthy();
  });
});
