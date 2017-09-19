import React from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native'

import NotificationView from './NotificationView'
import FacebookTabBar from './FacebookTabBar'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import PeopleView from './PeopleView'
import CoursePlanningView from './CoursePlanningView'

export default React.createClass({
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            backgroundColor: 'darkblue'
          }}
        >
          {/* <Image
            source={require('./fsktm-logo.jpg')}
            style={styles.headerLogo}
          /> */}
          <Text style={styles.headerText}>FSKTM App</Text>
        </View>

        <ScrollableTabView
          style={{ marginTop: 20 }}
          initialPage={1}
          renderTabBar={() => <FacebookTabBar />}
        >
          <ScrollView tabLabel="ios-notifications" style={styles.tabView}>
            <View style={styles.card}>
              <NotificationView />
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-people" style={styles.tabView}>
            <View style={styles.card}>
              <PeopleView />
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-calendar" style={styles.tabView}>
            <View style={styles.card}>
              <CoursePlanningView />
            </View>
          </ScrollView>
          <ScrollView tabLabel="ios-list" style={styles.tabView}>
            <View style={styles.card}>
              <ExpoThreeExampleView />
            </View>
          </ScrollView>
        </ScrollableTabView>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  headerText: {
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold'
  },
  headerLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain'
  },
  tabView: {
    flex: 1,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.01)'
  },
  card: {
    // borderWidth: 1,
    // backgroundColor: '#fff',
    // borderColor: 'rgba(0,0,0,0.1)',
    // margin: 5,
    // height: 150,
    // padding: 15,
    // shadowColor: '#ccc',
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 3
  }
})
