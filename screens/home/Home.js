import { View, StyleSheet } from 'react-native'
import AddPeopleBtn from '../../components/buttons/Buttons'
import List from '../../components/list/List'

const Home = () => {
  return (
    <View style={styles.container}>
      <List />
      <AddPeopleBtn />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3e3e3',
  },
})

export default Home
