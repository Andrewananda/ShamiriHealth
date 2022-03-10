import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {Text, View} from 'react-native';

export default function DailyScoreComponent(props) {
  return (
    <View style={{margin: moderateScale(10)}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              marginHorizontal: moderateScale(10),
              color: '#979797',
              fontSize: moderateScale(12),
            }}>
            {props.title}
          </Text>
        </View>
        <View style={{marginHorizontal: moderateScale(10)}}>
          <Text style={{color: '#979797', fontSize: moderateScale(12)}}>
            {props.score}
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: props.color,
          width: props.percent,
          borderRadius: moderateScale(10),
          height: moderateScale(15),
          marginTop: moderateScale(5),
        }}
      />
    </View>
  );
}
