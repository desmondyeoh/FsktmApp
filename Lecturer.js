import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Linking
} from 'react-native'

export default class Lecturer extends React.Component {
  render() {
    const {
      staffTitle,
      Name,
      Position,
      Department,
      Tel,
      Fax,
      imgpath,
      cvlink,
      email,
      staffid
    } = this.props.detail
    return (
      <View style={styles.card}>
        <Image source={{ uri: imgpath }} style={styles.lecturerImage} />
        <Text>Name: {`${staffTitle} ${Name}`}</Text>
        <Text>Position: {Position}</Text>
        <Text>Department: {Department}</Text>
        <Text>Tel: {Tel}</Text>
        <Text>Fax: {Fax}</Text>
        <Text
          style={{ color: 'red' }}
          onPress={() => {
            Linking.openURL('mailto:' + email)
          }}
        >
          Email: {email}
        </Text>
        <Text>CV: {cvlink}</Text>
        <Text style={styles.author}>{staffid}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold'
  },
  lecturerImage: {
    width: 100,
    height: 130
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
  card: {
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
