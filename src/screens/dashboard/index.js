import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Card} from 'react-native-paper';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {color_primary, color_white} from '../../utilities/Utilities';
import moment from 'moment';
import {ProgressChart} from 'react-native-chart-kit';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        backgroundColor: 'transparent',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(133, 189, 175, ${opacity})`,
        strokeWidth: 1,
        barPercentage: 0.5,
      },
      datasets: {
        labels: [
          'Mental Health',
          'Satisfaction',
          'Family/Social Support',
          'Work',
          'Sense of Purpose',
        ],
        data: [0.9, 0.6, 0.4, 0.2, 0.1],
        colors: ['#F6E9E7', '#E3A89F', '#BCD9D1', '#85BDAF', '#143029'],
      },
    };
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
            <Text style={styles.wellnessPlanTitle}>TODAY</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Detail')}>
            <View>
              <View>
                <ProgressChart
                  data={this.state.datasets}
                  height={moderateScale(150)}
                  strokeWidth={moderateScale(8)}
                  width={moderateScale(300)}
                  radius={moderateScale(20)}
                  chartConfig={this.state.config}
                  withCustomBarColorFromData={true}
                  hasLegend={false}
                />
              </View>
            </View>
            <View
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
            </View>
          </TouchableOpacity>
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
