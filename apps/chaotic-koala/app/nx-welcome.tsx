import { FeatureLib1 } from '@chaotic-koala/feature-lib1';
import { FeatureLib2 } from '@chaotic-koala/feature-lib2';
import { FeatureLib3 } from '@chaotic-koala/feature-lib3';
import { FeatureLib4 } from '@chaotic-koala/feature-lib4';
import { FeatureLib5 } from '@chaotic-koala/feature-lib5';

export function NxWelcome({ title }: { title: string }) {
  return (
    <>
      <h1>Welcome</h1>
      <FeatureLib1 />
      <FeatureLib2 />
      <FeatureLib3 />
      <FeatureLib4 />
      <FeatureLib5 />
    </>
  );
}

export default NxWelcome;
