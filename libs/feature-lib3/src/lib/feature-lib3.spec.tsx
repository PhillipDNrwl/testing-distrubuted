import { render } from '@testing-library/react';

import FeatureLib3 from './feature-lib3';

describe('FeatureLib3', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureLib3 />);
    expect(baseElement).toBeTruthy();
  });
});
