import { UiLib1 } from '@chaotic-koala/ui-lib1';
import { UiLib2 } from '@chaotic-koala/ui-lib2';
import { UiLib3 } from '@chaotic-koala/ui-lib3';
import { UiLib4 } from '@chaotic-koala/ui-lib4';
import { UiLib5 } from '@chaotic-koala/ui-lib5';
import styles from './feature-lib3.module.css';

export function FeatureLib3() {
  return (
    <div className={styles['container']}>
      <h2>Welcome to FeatureLib3!</h2>
      <UiLib1 />
      <UiLib2 />
      <UiLib3 />
      <UiLib4 />
      <UiLib5 />
    </div>
  );
}

export default FeatureLib3;
