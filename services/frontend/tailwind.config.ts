import type { Config } from 'tailwindcss'

export default {
  content: ["./src/**/*.{html,js,ts,vue}"],
  theme: {
    extend: {
      colors: {
        red: {
          10: '#FEEFEF',
          40: '#F8A5A5',
          100: '#DF0707',
          DEFAULT: '#DF0707',
          140: '#B22424',
          180: '#661515',
        },
        purple: {
          10: '#FBF0FD',
          40: '#EAADF4',
          100: '#D86AEA',
          DEFAULT: '#D86AEA',
          140: '#984BA5',
          180: '#522959',
        },
        green: {
          10: '#D7FAF4',
          40: '#97F2E2',
          100: '#41E8CA',
          DEFAULT: '#41E8CA',
          140: '#2EA690',
          180: '#19594D',
        },
        yellow: {
          10: '#FFF1DC',
          40: '#FFDCA5',
          100: '#FFAF36',
          DEFAULT: '#FFAF36',
          140: '#99601D',
          180: '#664013',
        },
        primary: {
          10: '#EFEDFC',
          20: '#D3CEF6',
          40: '#B6AEF1',
          60: '#9A8EEB',
          80: '#7D6FE6',
          100: '#614FE0',
          DEFAULT: '#614FE0',
          120: '#5041B8',
          140: '#3E338F',
          160: '#2D2467',
          180: '#1B163F',
          190: '#0A0816',
        },
        neutral: {
          '00': '#FFFFFF',
          '05': '#F3F3F3',
          10: '#E7E7E8',
          15: '#DBDBDB',
          20: '#CFCFCF',
          30: '#B7B7B8',
          40: '#9F9F9F',
          50: '#868687',
          60: '#6E6E70',
          70: '#575758',
          80: '#3E3E40',
          85: '#323234',
          90: '#272728',
          95: '#1A1A1C',
          100: '#0E0E10',
        },
        secondary: {
          10: '#FFF2EF',
          20: '#FFDAD1',
          40: '#FFC3B3',
          60: '#FFAB95',
          80: '#FF9478',
          100: '#FF7C5A',
          DEFAULT: '#FF7C5A',
          120: '#D1664A',
          140: '#A34F3A',
          160: '#753929',
          180: '#472319',
          190: '#1A0C09',
        },
      },
    },
  },
  plugins: [],
}