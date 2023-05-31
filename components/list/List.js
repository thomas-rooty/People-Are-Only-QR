import { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { getPersons } from '../../utils/fetchData'
import { usePersonsStore } from '../../stores/persons.store'
import PersonCard from '../cards/PersonCard'

const List = () => {
  const persons = usePersonsStore((state) => state.persons)
  const setPersons = usePersonsStore((state) => state.setPersons)

  useEffect(() => {
    const fetchData = async () => {
      const personsData = await getPersons()
      setPersons(personsData)
    }
    fetchData()
  }, [persons])

  return (
    <View style={styles.container}>
      <View style={{ height: '83%' }}>
        <FlatList data={persons} renderItem={({ item }) => <PersonCard person={item[0]} />} keyExtractor={(item) => item[0].login.uuid} />
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
})

export default List
