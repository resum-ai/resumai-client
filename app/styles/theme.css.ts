import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    blue_black: '#174064',
    
    blue100: '#0C81E4',
    blue70: '#61B6FF',
    blue30: '#DEEFFE',
    blue10: '#F3F9FE',

    white: '#FFFFFF',
    gray1: '#F3F5F8',
    gray2: '#D6DBDF',
    gray3: '#BEC3CC',
    gray4: '#646D7A',
    gray5: '#3F4953',
    black: '#0E0E0E',

    bg_main: '#F3F3F3',
    bg_light: '#FAFAFA'

  },
  typo: {
    title: style({ fontFamily: 'Pretendard', fontSize: '30rem', fontWeight: 600, lineHeight: '100%'}),
    sub_title: style({ fontFamily: 'Pretendard', fontSize: '20rem', fontWeight: 600, lineHeight: '160%'}),
    main_text: style({ fontFamily: 'Pretendard', fontSize: '20rem', fontWeight: 400, lineHeight: '150%'}),
    sub_text: style({ fontFamily: 'Pretendard', fontSize: '16rem', fontWeight: 400, lineHeight: '150%'}),
  },
  shadow:{
    drop:  style({ boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.25)' }),
  }
});
