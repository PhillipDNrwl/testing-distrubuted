import { render } from '@testing-library/react';

import FeatureLib2 from './feature-lib2';

describe('FeatureLib2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLib2 />);
    expect(baseElement).toBeTruthy();
  });
});
