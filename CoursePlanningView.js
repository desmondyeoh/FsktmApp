import React from 'react'
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Linking,
  Button
} from 'react-native'

import axios from 'axios'
import LecturerResults from './LecturerResults'
import CPLinks from './CoursePlanningLinks'

export default class PeopleView extends React.Component {
  _renderSessions = () => {
    return CPLinks.map((session, index) => {
      return (
        <View key={index}>
          <Text style={styles.sessionText}>{session['session']}</Text>
          {this._renderCourses(session['courses'])}
        </View>
      )
    })
  }
  _renderCourses = courses => {
    return courses.map(({ course, link }, index) => {
      return (
        <View style={styles.buttonPadding} key={index}>
          <Button
            onPress={() => {
              Linking.openURL(link)
            }}
            title={course}
          />
        </View>
      )
    })
  }
  render() {
    return <View>{this._renderSessions()}</View>
  }
}

const styles = StyleSheet.create({
  sessionText: {
    fontWeight: 'bold'
  },
  buttonPadding: {
    padding: 10
  }
})
