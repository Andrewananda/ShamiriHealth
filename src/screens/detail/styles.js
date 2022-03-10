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
  recommendationImage: {
    height: moderateScale(150),
    borderTopLeftRadius: moderateScale(10),
    borderTopRightRadius: moderateScale(10),
    width: moderateScale(300),
  },
  recommendationTitle: {
    color: '#C4C4C4',
    marginHorizontal: moderateScale(10),
    fontSize: moderateScale(10),
  },
  recommendationDescription: {
    marginHorizontal: moderateScale(10),
    color: '#000',
    fontSize: moderateScale(10),
  },
  recommendationText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: moderateScale(16),
  },
  mentalHealthText: {
    color: '#000',
    fontSize: moderateScale(14),
    fontWeight: 'bold',
  },
  recommendationView: {
    marginVertical: moderateScale(10),
    marginHorizontal: moderateScale(10),
  }
};
