import {moderateScale} from 'react-native-size-matters';

export default {
  tabContainerStyle: {
    borderRadius: moderateScale(10),
    backgroundColor: '#F6E9E7',
    borderColor: '#fff',
  },
  activeTabStyle: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderColor: '#fff',
    margin: moderateScale(4),
  },
  lastTabStyle: {
    borderColor: '#F6E9E7',
    color: '#F6E9E7',
    textColor: '#000',
  },
  firstTabStyle: {
    borderColor: '#F6E9E7',
    color: '#F6E9E7',
    textColor: '#000',
  },
  tabStyle: {
    backgroundColor: '#F6E9E7',
    textColor: '#000',
  },
  activeTabTextStyle: {
    color: '#000',
  },
  tabTextStyle: {
    borderColor: '#000',
  },
};
