import baseConfig from '@utima/eslint-config';
import { next } from '@utima/eslint-config/configs';

export default [
  ...baseConfig,
  ...next,
  {
    rules: {
      'react/no-multi-comp': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
];
