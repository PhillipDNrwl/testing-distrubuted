import { UiLib1 } from '@chaotic-koala/ui-lib1';
import { UiLib2 } from '@chaotic-koala/ui-lib2';
import { UiLib3 } from '@chaotic-koala/ui-lib3';
import { UiLib4 } from '@chaotic-koala/ui-lib4';
import { UiLib5 } from '@chaotic-koala/ui-lib5';
import styles from './feature-lib2.module.css';
import { UiLib6 } from '@chaotic-koala/libs/ui-lib6';
import { UiLib7 } from '@chaotic-koala/libs/ui-lib7';

export function FeatureLib2() {
  return (
    <div className={styles['container']}>
      <h2>Welcome to FeatureLib2!</h2>
      <UiLib1 />
      <UiLib2 />
      <UiLib3 />
      <UiLib4 />
      <UiLib5 />
      <UiLib6 />
      <UiLib7 />
    </div>
  );
}

export default FeatureLib2;
