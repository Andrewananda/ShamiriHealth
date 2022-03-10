import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function WeeklyScoreContainer() {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <View style={{flexDirection: 'column', margin: moderateScale(10)}}>
        <View>
          <Text style={{color: '#979797', fontSize: moderateScale(10)}}>
            Weekly average
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#E3A89F',
              fontSize: moderateScale(24),
            }}>
            6
          </Text>
        </View>
      </View>
      {/* Week over week */}
      <View style={{flexDirection: 'column', margin: moderateScale(10)}}>
        <View>
          <Text style={{color: '#979797', fontSize: moderateScale(10)}}>
            Week-over-week
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <AntDesign
              color={'#E3A89F'}
              size={moderateScale(30)}
              name={'arrowdown'}
            />
          </View>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: '#E3A89F',
                fontSize: moderateScale(24),
              }}>
              20%
            </Text>
          </View>
        </View>
      </View>
      {/* Goal*/}
      <View style={{flexDirection: 'column', margin: moderateScale(10)}}>
        <View>
          <Text style={{color: '#979797', fontSize: moderateScale(10)}}>
            Goal
          </Text>
        </View>
        <View>
          <Text
            style={{
              textAlign: 'center',
              color: '#E3A89F',
              fontSize: moderateScale(24),
            }}>
            8
          </Text>
        </View>
      </View>
    </View>
  );
}
