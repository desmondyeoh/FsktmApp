import React from 'react'
import { FlatList, Text } from 'react-native'

import Lecturer from './Lecturer'

export default class LecturerResults extends React.Component {
  render() {
    const { lecturers } = this.props
    return (
      // <Text>{JSON.stringify(lecturers)}</Text>
      <FlatList
        data={lecturers}
        renderItem={({ item }) => <Lecturer detail={item} />}
        keyExtractor={(item, index) => item.staffid}
      />
    )
  }
}
