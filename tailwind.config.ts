import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './page/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    borderRadius: {
      0: '0px',
      4: '4px',
      8: '8px',
      16: '16px',
      full: '9999px',
    },
    borderWidth: {
      1: '1px',
      2: '2px',
      3: '3px',
    },
    fontSize: {
      12: ['12px', '14px'],
      14: ['14px', '17px'],
      16: ['16px', '19px'],
      18: ['18px', '21px'],
      20: ['20px', '24px'],
      22: ['22px', '26px'],
      24: ['24px', '29px'],
      28: ['28px', '33px'],
      32: ['32px', '38px'],
      36: ['36px', '43px'],
    },
    fontWeight: {
      400: '400',
      500: '500',
      600: '600',
      700: '700',
    },
    spacing: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      22: '22px',
      24: '24px',
      28: '28px',
      32: '32px',
      36: '36px',
      40: '40px',
      48: '48px',
      52: '52px',
      56: '56px',
      64: '64px',
      72: '72px',
      84: '84px',
    },
  },
};
export default config;
