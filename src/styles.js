import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#FF8434',
  secondary: '#2DB93B',
  third: '#FFEEE3',
  background: '#FFFFFF',
  card: '#656565',
  text: '#0C0C0C',
  border: '#707070',
  inputTextColor: '#E8E8E8',
  button: '#FF8434',
  text1: '#616161',
  text1bc: '#E1E1E1',
  text1hoverbc: '#EFEFEF',
  pinkOrange: '#FFEEE3',
};

export const gradientColors = ['#656368', colors.background];

export const text = StyleSheet.create({
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  xl: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  xlThin: {
    fontSize: 27,
  },
  lg: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  lgThin: {
    fontSize: 20,
  },
  md: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  mdThin: {
    fontSize: 14,
  },
  sm: {
    fontSize: 12,
  },
  smThin: {
    fontSize: 12,
    fontWeight: '200',
  },
  smBold: {
    fontWeight: 'bold',
    fontSize: 12,
  },
  m: {
    fontSize: 10,
  },
  mBold: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  mThin: {
    fontSize: 10,
    fontWeight: '200',
  },
});

export const layout = StyleSheet.create({
  hsb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vsb: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
});

export const size = {
  xl: 50,
  lg: 20,
  md: 10,
  sm: 5,
  iconLg: 25,
  iconMd: 20,
  iconSm: 15,
  sectionHeight: 250,
  mpSize: 70,
  eventCard: {width: 190, height: 250},
  organizerCard: {width: 170, height: 250},
  dateCard: {width: 130, height: 162},
};
