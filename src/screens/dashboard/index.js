import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color_primary, color_white} from '../../utilities/Utilities';
import moment from 'moment';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={{flex: 1}} overScrollMode={'never'}>
        <View style={{backgroundColor: color_primary}}>
          <View style={{margin: moderateScale(10)}}>
            <Text
              style={{
                color: color_white,
                fontSize: moderateScale(32),
                fontWeight: 'bold',
              }}>
              For You
            </Text>
            <Text
              style={{
                color: color_white,
                fontSize: moderateScale(16),
                fontWeight: 'bold',
              }}>
              {moment().format('LL') + ',' + moment().format('dddd')}
            </Text>
          </View>
          <Calendar
            markingType="multi-period"
            enableSwipeMonths={true}
            onPressArrowLeft={subtractMonth => subtractMonth()}
            onPressArrowRight={addMonth => addMonth()}
            theme={{
              arrowColor: color_white,
              calendarBackground: color_primary,
              textSectionTitleColor: color_white,
              dayTextColor: color_white,
              monthTextColor: color_white,
            }}
          />
        </View>

        <Card
          style={{
            margin: moderateScale(10),
            borderRadius: moderateScale(8),
            elevation: moderateScale(10),
          }}>
          <View>
            <Text
              style={styles.wellnessPlanTitle}>
              TODAY
            </Text>
          </View>
          <View
            style={{
              margin: moderateScale(10),
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Text>Chart</Text>
            </View>
            <View style={{flexDirection: 'column'}}>
              {/*Mental health*/}
              <View style={styles.todayDetailContainer}>
                <View style={styles.todayDotIcon} />
                <View>
                  <Text style={styles.todayDescription}>Mental Health</Text>
                </View>
              </View>
              {/*Satisfaction*/}
              <View style={styles.todayDetailContainer}>
                <View
                  style={[styles.todayDotIcon, {backgroundColor: '#E3A89F'}]}
                />
                <View>
                  <Text style={styles.todayDescription}>Satisfaction</Text>
                </View>
              </View>
              {/*Family/Social Support*/}
              <View style={styles.todayDetailContainer}>
                <View
                  style={[styles.todayDotIcon, {backgroundColor: '#BCD9D1'}]}
                />
                <View>
                  <Text style={styles.todayDescription}>
                    Family/Social Support
                  </Text>
                </View>
              </View>
              {/*Work*/}
              <View style={styles.todayDetailContainer}>
                <View
                  style={[styles.todayDotIcon, {backgroundColor: '#85BDAF'}]}
                />
                <View>
                  <Text style={styles.todayDescription}>Work</Text>
                </View>
              </View>
              {/*Sense of Purpose*/}
              <View style={styles.todayDetailContainer}>
                <View
                  style={[styles.todayDotIcon, {backgroundColor: '#143029'}]}
                />
                <View>
                  <Text style={styles.todayDescription}>Sense of Purpose</Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                margin: moderateScale(10),
              }}>
              <Text style={{fontSize: moderateScale(10), alignSelf: 'center'}}>
                More
              </Text>
              <AntDesign
                name={'right'}
                style={{alignSelf: 'center', fontWeight: 'bold'}}
                size={moderateScale(8)}
              />
            </TouchableOpacity>
          </View>
        </Card>
        <Card style={styles.wellnessCard}>
          <Text style={styles.wellnessPlanTitle}>Your Wellness Plan</Text>

          <View style={{flexDirection: 'row'}}>
            <View>
              <Image
                source={require('../../../assets/hello.jpeg')}
                style={styles.yourWellnessImage}
                resizeMode={'cover'}
              />
              <View style={styles.yourWellnessContainer}>
                <Text style={styles.wellnessTitle}>Veronica H</Text>
                <Text style={styles.wellnessDescription}>
                  Shamiri Licensed Counselor
                </Text>
              </View>
            </View>

            <View>
              <Image
                source={require('../../../assets/hello.jpeg')}
                style={styles.yourWellnessImage}
                resizeMode={'cover'}
              />
              <View style={styles.yourWellnessContainer}>
                <Text style={styles.wellnessTitle}>Sunehra A.</Text>
                <Text style={styles.wellnessDescription}>
                  Shamiri Licensed Counselor
                </Text>
              </View>
            </View>
          </View>
          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                margin: moderateScale(10),
              }}>
              <Text style={{fontSize: moderateScale(10), alignSelf: 'center'}}>
                More
              </Text>
              <AntDesign
                name={'right'}
                style={{alignSelf: 'center', fontWeight: 'bold'}}
                size={moderateScale(8)}
              />
            </TouchableOpacity>
          </View>
        </Card>
      </ScrollView>
    );
  }
}

export default Dashboard;
