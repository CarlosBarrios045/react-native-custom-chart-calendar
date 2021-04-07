import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {PieChart as SVGPieChart} from 'react-native-svg-charts';
import {Defs, LinearGradient, Stop, Svg, Circle} from 'react-native-svg';

const Chart = ({navigation}) => {
  const data = [
    {
      value: 5,
      colorInitial: 'rgb(66, 194, 244)',
      colorEnd: 'rgb(134, 65, 244)',
    },
    {
      value: 3,
      colorInitial: 'rgb(226, 52, 137)',
      colorEnd: 'rgb(168, 49, 213)',
    },
    {
      value: 2,
      colorInitial: 'rgb(85, 252, 121)',
      colorEnd: 'rgb(89, 155, 89)',
    },
  ];

  let total = 0;

  const newData = data.map((d, i) => {
    total += d.value;
    const key = `graph${i}`;

    return {
      ...d,
      key,
      svg: {fill: `url(#${key})`},
    };
  });

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <Text>Pie Chart Custom</Text>
          <Button
            title="Go to Calendar"
            onPress={() => navigation.navigate('Calendar')}
          />
          <SVGPieChart
            style={styles.chart}
            data={newData}
            padAngle={0}
            outerRadius={'0%'}>
            {newData.map(graph => (
              <Defs key={graph.key}>
                <LinearGradient id={graph.key} y2={'100%'}>
                  <Stop offset={'0%'} stopColor={graph.colorInitial} />
                  <Stop offset={'100%'} stopColor={graph.colorEnd} />
                </LinearGradient>
              </Defs>
            ))}
          </SVGPieChart>

          <View style={styles.legends}>
            {newData.map(d => (
              <View style={styles.labelRow} key={d.key}>
                <Svg width="40" height="40">
                  <Circle cx="20" cy="20" r="20" fill={d.colorInitial} />
                </Svg>
                <Text style={styles.label}>
                  {(d.value / total).toPrecision(2)} %
                </Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '20%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chart: {height: 400, width: 400},
  legends: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: 12,
  },
});

export default Chart;
