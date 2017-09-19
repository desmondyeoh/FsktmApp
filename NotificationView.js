import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

import Notification from './Notification'

export default class NotificationView extends React.Component {
  render() {
    return (
      <Notification
        title="Undergraduates: Please be on time to class"
        body="Attendance will be counted in finals"
        datetime="8.00am 17 July 2017"
        author="admin"
      />
    )
  }
}
