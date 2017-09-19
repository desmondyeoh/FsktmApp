import React from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native'

export default class Notification extends React.Component {
  render() {
    return (
      <View style={styles.notification}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.body}>{this.props.body}</Text>
        <Text style={styles.datetime}>{this.props.datetime}</Text>
        <Text style={styles.author}>- {this.props.author}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  // tabView: {
  //   flex: 1,
  //   padding: 10,
  //   backgroundColor: 'rgba(0,0,0,0.01)'
  // },
  title: {
    fontWeight: 'bold'
  },
  body: {},
  datetime: {
    color: 'gray',
    fontSize: 12
  },
  author: {
    color: 'gray',
    fontSize: 12
  },
  notification: {
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: 'rgba(0,0,0,0.1)',
    margin: 5,
    padding: 15,
    shadowColor: '#ccc',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3
  }
})
