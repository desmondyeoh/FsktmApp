import React from 'react'
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'

import axios from 'axios'
import LecturerResults from './LecturerResults'

export default class PeopleView extends React.Component {
  state = {
    textInput: '',
    searchResults: {}
  }
  _handleSubmitEditing = () => {
    const { textInput } = this.state
    axios
      .get(
        `http://www.fsktm.um.edu.my/services/staff.aspx?page=1&keyword=${textInput}&faculty=ccf9ce07-9061-6e0c-9441-ff0000c617a7&department=&name=&ismainsite=False&action=iskeyword&ddl_name=undefined`
      )
      .then(searchResults => this.setState({ searchResults }))
  }
  render() {
    const { searchResults } = this.state
    let data = null,
      count = 0,
      lecturers = null
    if (searchResults['data']) {
      data = searchResults['data']
      count = data['count']
      lecturers = data['Data']
    }
    return (
      <View>
        <Text>Search For Lecturer:</Text>
        <TextInput
          onSubmitEditing={this._handleSubmitEditing}
          onChangeText={textInput => this.setState({ textInput })}
          value={this.state.textInput}
        />
        {count > 0 ? (
          <Text>{count} results</Text>
        ) : (
          <Text>No results found.</Text>
        )}

        <LecturerResults lecturers={lecturers} />
      </View>
    )
  }
}
