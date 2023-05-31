import { useEffect, useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { getPersons } from '../../utils/fetchData'
import PersonCard from '../cards/PersonCard'

const List = () => {
  const [persons, setPersons] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const personsData = await getPersons()
      console.log(personsData)
      // Result is lile this :
      setPersons(personsData)
    }

    fetchData()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={persons}
        renderItem={({ item }) => <PersonCard person={item[0]} />}
        keyExtractor={(item) => item[0].id.value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffcd00',
    flex: 1,
    paddingTop: 50,
  },
})

export default List
