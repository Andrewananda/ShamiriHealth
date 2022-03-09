import {moderateScale} from 'react-native-size-matters';
import {color_white} from '../../utilities/Utilities';

export default {
  todayDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: moderateScale(5),
  },
  todayDotIcon: {
    marginHorizontal: moderateScale(4),
    alignSelf: 'center',
    width: moderateScale(6),
    height: moderateScale(6),
    backgroundColor: '#F6E9E7',
  },
  todayDescription: {
    color: '#979797',
    fontSize: moderateScale(10),
    marginTop: moderateScale(2),
  },
  yourWellnessImage: {
    width: moderateScale(100),
    height: moderateScale(130),
    borderRadius: moderateScale(10),
    margin: moderateScale(10),
  },
  yourWellnessContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(196,238,236,0.78)',
    bottom: moderateScale(50),
    start: moderateScale(10),
    width: moderateScale(100),
    top: moderateScale(90),
    height: moderateScale(50),
    borderBottomStartRadius: moderateScale(10),
    borderBottomEndRadius: moderateScale(10),
  },
  wellnessTitle: {
    textAlign: 'center',
    color: color_white,
    marginTop: moderateScale(5),
  },
  wellnessDescription: {
    textAlign: 'center',
    color: color_white,
    marginTop: moderateScale(5),
    fontSize: moderateScale(6),
  },
  wellnessPlanTitle: {
    color: '#C4C4C4',
    margin: moderateScale(6),
    fontSize: moderateScale(12),
    marginHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
    fontWeight: 'bold',
  },
  wellnessCard: {
    marginLeft: moderateScale(10),
    marginRight: moderateScale(10),
    borderRadius: moderateScale(8),
    elevation: moderateScale(10),
  }
};
