import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import {BarChart, ProgressChart} from 'react-native-chart-kit';
import {Card} from 'react-native-paper';
import DailyScoreComponent from './DailyScoreComponent';
import WeeklyScoreContainer from './WeeklyScoreContainer';
import {Appbar} from 'react-native-paper';
import moment from 'moment';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0,
      config: {
        backgroundColor: 'transparent',
        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(133, 189, 175, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(151, 151, 151, ${opacity})`,
        strokeWidth: 1,
        barPercentage: 0.5,
      },
      datasets: {
        data: [0.9, 0.6, 0.4, 0.2, 0.1],
        colors: ['#F6E9E7', '#E3A89F', '#BCD9D1', '#85BDAF', '#143029'],
      },
      barChat: {
        labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            colors: [
              (opacity = 1) => '#F6E9E7',
              (opacity = 1) => '#F6E9E7',
              (opacity = 1) => '#F6E9E7',
              (opacity = 1) => '#F6E9E7',
              (opacity = 1) => '#F6E9E7',
              (opacity = 1) => '#F6E9E7',
            ],
          },
        ],
      },
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

  today() {
    return moment().format('ddd') + ' ' + moment().format('MMM Do yy');
  }

  week() {
    return (
      moment().startOf('week').format('MMM Do') +
      '-' +
      moment().endOf('isoWeek').format('MMM Do')
    );
  }

  renderView() {
    if (this.state.selectedIndex === 0) {
      //Daily
      return (
        <View
          style={{
            margin: moderateScale(10),
            justifyContent: 'center',
            alignContent: 'center',
          }}>
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
          <Card
            style={{
              margin: moderateScale(10),
              borderRadius: moderateScale(10),
              elevation: moderateScale(4),
            }}>
            <DailyScoreComponent
              title={'Mental Health'}
              score={'8/10'}
              color={'#F6E9E7'}
              percent={'80%'}
            />
            <DailyScoreComponent
              title={'Satisfaction'}
              score={'2.5/10'}
              color={'#E3A89F'}
              percent={'30%'}
            />
            <DailyScoreComponent
              title={'Family/Social Support '}
              score={'4.5/10'}
              color={'#BCD9D1'}
              percent={'45%'}
            />
            <DailyScoreComponent
              title={'Work'}
              score={'6/10'}
              color={'#85BDAF'}
              percent={'60%'}
            />
            <DailyScoreComponent
              title={'Sense of Purpose'}
              score={'4/10'}
              color={'#143029'}
              percent={'40%'}
            />
          </Card>
        </View>
      );
    } else {
      //Weekly
      return (
        <ScrollView
          overScrollMode={'never'}
          style={{margin: moderateScale(10)}}>
          <View style={{marginHorizontal: moderateScale(10)}}>
            <Text style={styles.mentalHealthText}>Mental Health</Text>
          </View>
          <View>
            <WeeklyScoreContainer />
          </View>
          <View>
            <BarChart
              style={{barColors: '#143029'}}
              data={this.state.barChat}
              width={moderateScale(300)}
              height={220}
              chartConfig={this.state.config}
              verticalLabelRotation={0}
              showBarTops={false}
              fromZero={true}
              flatColor={true}
              hasLegend={false}
              withInnerLines={true}
              withCustomBarColorFromData={true}
            />
          </View>
          <View
            style={{
              borderBottomColor: '#C4C4C4',
              borderBottomWidth: 1,
            }}
          />
          <View style={styles.recommendationView}>
            <Text style={styles.recommendationText}>Recommendation</Text>
            <View>
              <Image
                source={require('../../../assets/hello.jpeg')}
                style={styles.recommendationImage}
                resizeMode={'cover'}
              />
              <Text style={styles.recommendationTitle}>1-on-1 Session</Text>
              <Text style={styles.recommendationDescription}>
                Talk to our therapists about employee burnout?
              </Text>
            </View>
          </View>
        </ScrollView>
      );
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Appbar.Header style={{backgroundColor: '#fff'}}>
          <Appbar.BackAction onPress={() => this.props.navigation.goBack()} />
          <Appbar.Content
            title={this.state.selectedIndex === 0 ? this.today() : this.week()}
          />
        </Appbar.Header>
        <View
          style={{
            flex: 1,
            margin: moderateScale(10),
            backgroundColor: '#ffffff',
          }}>
          <SegmentedControlTab
            values={['Daily', 'Weekly']}
            selectedIndex={this.state.selectedIndex}
            onTabPress={this.handleIndexChange}
            tabsContainerStyle={styles.tabContainerStyle}
            activeTabStyle={styles.activeTabStyle}
            lastTabStyle={styles.lastTabStyle}
            firstTabStyle={styles.firstTabStyle}
            activeTabTextStyle={styles.activeTabTextStyle}
            tabStyle={styles.tabStyle}
            tabTextStyle={{borderColor: '#000'}}
          />

          {this.renderView()}
        </View>
      </View>
    );
  }
}

export default Detail;
