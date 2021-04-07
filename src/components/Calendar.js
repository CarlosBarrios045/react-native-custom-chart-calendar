import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {Calendar} from 'react-native-calendars';

const CalendarComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Calendar
        markedDates={{
          '2021-04-12': {
            startingDay: true,
            endingDay: true,
            color: '#a2cab7',
            selected: true,
          },
          '2021-04-14': {
            startingDay: true,
            color: '#a2cab7',
            selected: true,
          },
          '2021-04-15': {
            selected: true,
            color: '#a2cab7',
            marked: true,
          },
          '2021-04-16': {
            color: '#a2cab7',
            selected: true,
            endingDay: true,
          },
          '2021-04-17': {
            endingDay: true,
            marked: true,
          },
          '2021-04-20': {marked: true},
          '2021-04-21': {marked: true},
          '2021-04-22': {startingDay: true, endingDay: true},
          '2021-04-26': {disabled: true, disableTouchEvent: true},
        }}
        markingType="period"
        theme={{
          calendarBackground: '#ece6ff',
          textSectionTitleColor: '#b6c1cd',
          textSectionTitleDisabledColor: '#d9e1e8',
          selectedDayBackgroundColor: '#3830cc',
          selectedDayTextColor: '#fff',
          todayTextColor: '#3830cc',
          dayTextColor: '#2d4150',
          textDisabledColor: '#8496a3',
          dotColor: '#3830cc',
          selectedDotColor: '#ffffff',
          arrowColor: '#3830cc',
          monthTextColor: '#3830cc',
          indicatorColor: '#3830cc',
        }}
        style={styles.calendar}
      />
      <Button
        title="Go to Chart"
        onPress={() => navigation.navigate('Chart')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '20%',
    flex: 1,
    alignItems: 'center',
  },
  calendar: {
    borderRadius: 20,
    height: 330,
    width: 360,
  },
});

export default CalendarComponent;
