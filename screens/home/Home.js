import { Text, View, StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
