import { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList, TouchableOpacity, Image, Text } from 'react-native'
import { getPersons } from '../../utils/fetchData'
import PersonCard from '../cards/PersonCard'

const List = () => {
  const [persons, setPersons] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const refreshimg = require('../../assets/refresh.png')

  useEffect(() => {
    const fetchData = async () => {
      const personsData = await getPersons()
      setPersons(personsData)
    }
    fetchData()
  }, [refreshing])

  return (
    <View style={styles.container}>
      <View style={{ height: '75%' }}>
        <FlatList data={persons} renderItem={({ item }) => <PersonCard person={item[0]} />} keyExtractor={(item) => item[0].login.uuid} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => setRefreshing(!refreshing)}>
          <View style={styles.button}>
            <Image source={refreshimg} style={{ width: 30, height: 30, position: 'absolute', left: 10, top: 10 }} />
            <Text style={styles.buttonText}>REFRESH</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd00',
    flex: 1,
    paddingTop: 50,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 125,
    right: 10,
  },
  button: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 10,
    margin: 10,
    width: 160,
    height: 50,
    shadowColor: '#ffba00',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 0,
    borderBottomColor: '#d0d0d0',
    borderBottomWidth: 1,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
})

export default List
