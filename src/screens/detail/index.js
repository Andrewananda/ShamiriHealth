import React, {Component} from 'react';
import {Text, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {moderateScale} from 'react-native-size-matters';
import styles from './styles';
import {ProgressChart} from 'react-native-chart-kit';
import {Card} from 'react-native-paper';
import DailyScoreComponent from './DailyScoreComponent';

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
        strokeWidth: 1,
        barPercentage: 0.5,
      },
      datasets: {
        data: [0.9, 0.6, 0.4, 0.2, 0.1],
        colors: ['#F6E9E7', '#E3A89F', '#BCD9D1', '#85BDAF', '#143029'],
      },
    };
  }

  handleIndexChange = index => {
    this.setState({
      ...this.state,
      selectedIndex: index,
    });
  };

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
        <View>
          <Text>Weekly Tab</Text>
        </View>
      );
    }
  }

  render() {
    return (
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
    );
  }
}

export default Detail;
