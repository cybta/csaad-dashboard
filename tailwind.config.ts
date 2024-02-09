import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        bounceAndGrow: 'bounceAndGrow 0.5s 2',
      },
      flex: {
        2: '2 2 0%',
      },
      backgroundImage: {
        'main-blue': "url('/bg.png')",
      },
      padding: {
        '20px': '20px',
      },
      spacing: {
        '10px': '10px',
        '40px': '40px',
        '15px': '15px',
      },
      width: {
        '30%': '30%',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      'primary-90': '#3B275F',
      'primary-70': '#4F347E',
      'primary-50': '#5D3D97',
      'primary-20': '#864DEE',
      'primary-10': '#F7F2FF',

      'secondary-90': '#081449',
      'secondary-70': '#041978',
      'secondary-50': '#0327C9',
      secondary: '#0327C9',
      'secondary-20': '#284CF3',
      'secondary-10': '#E8ECFF',

      'success-90': '#003618',
      'success-70': '#006231',
      'success-50': '#007F41',
      success: '#007F41',
      'success-20': '#2DA55C',
      'success-10': '#F4FFF9',

      'error-90': '#410002',
      'error-70': '#690005',
      'error-50': '#DD2121',
      error: '#DD2121',
      'error-20': '#FFB4AB',
      'error-10': '#FFF7F5',

      'warning-90': '#A75D06',
      'warning-70': '#C76B00',
      'warning-50': '#EC7F00',
      'warning-20': '#F99724',
      'warning-10': '#FFEEDA',

      'neutral-90': '#171C22',
      'neutral-80': '#2C3137',
      'neutral-70': '#42474E',
      'neutral-50': '#858A94',
      'neutral-40': '#BDC0C5',
      'neutral-30': '#DEE3EB',
      'neutral-20': '#F8F8F9',
      'neutral-10': '#FFFFFF',
    },
  },
  plugins: [],
};
export default config;
