import { Text, View, StyleSheet } from 'react-native'
import AddPeopleBtn from '../../components/buttons/Buttons'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <AddPeopleBtn />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // horizontal
    justifyContent: 'center', // vertical
  },
})

export default Home
