import { View, StyleSheet } from 'react-native'
import AddPeopleBtn from '../../components/buttons/Buttons'

const Home = () => {
  return (
    <View style={styles.container}>
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
